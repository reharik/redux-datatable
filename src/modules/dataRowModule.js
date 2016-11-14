import { config } from './../utilities/configValues';
import React from 'react';
import uuid from 'uuid';
import { unionWith, eqBy, prop } from 'ramda';
import {SORT} from './columnModule'

export const DATA_REQUEST = 'redux-datatable/rows/DATA_REQUEST';
export const DATA_FAILURE = 'redux-datatable/rows/DATA_FAILURE';
export const DATA_SUCCESS = 'redux-datatable/rows/DATA_SUCCESS';
export const NO_EVENT = 'redux-datatable/bulkAction/NO_EVENT';
export const SELECT_ALL = 'redux-datatable/bulkAction/SELECT_ALL';
export const DESELECT_ALL = 'redux-datatable/bulkAction/DESELECT_ALL';
export const SET_SELECTION = 'redux-datatable/bulkAction/SELECT_ITEM';

const sort = function (a, b, dir) {
  let result = 0;
  let _a = a, _b = b;
  if(typeof a === 'string'){
    _a = _a.toUpperCase();
    _b = _b.toUpperCase();
  }
  if (_a > _b) {
    result = 1;

  } else if (_a < _b) {
    result = -1;
  }
  return  dir === 'asc' ? result : result * -1;
};

//TODO this needs to return new state not mutate it
export default (state = [], action = null) => {
  switch (action.type) {
    case SELECT_ALL: {
      return state[config.tableName].selectedItems = action.ids
    }
    case DESELECT_ALL: {
      return state[config.tableName].selectedItems = [];
    }
    case SET_SELECTION: {
      if(state.selectedItems[config.tableName].indexOf(action.id)<0){
        state.selectedItems[config.tableName].push(action.id);
      }
      return state
    }
    case SORT: {
      state[config.tableName].sort = {property:action.property, dir:action.dir};
      return state;
    }
  }
  return state;
}

export function handleSelectionEvent (selectionEvent, dispatch) {

  if (config.HANDLE_BEFORE_SELECTION) {
    config.HANDLE_BEFORE_SELECTION(selectionEvent, disptach);
  }

  if (config.HANDLE_BEFORE_BULKACTION_SHOW) {
    config.HANDLE_BEFORE_BULKACTION_SHOW(selectionEvent, disptach);
  }

  dispatch(selectionEvent);

  if (config.HANDLE_AFTER_SELECTION) {
    config.HANDLE_AFTER_SELECTION(selectionEvent, disptach);
  }

  if (config.HANDLE_AFTER_BULKACTION_SHOW) {
    config.HANDLE_AFTER_BULKACTION_SHOW(selectionEvent, disptach);
  }
}

export function selectAll(itemIds) {
  return { type: SELECT_ALL,
  ids: itemIds };
}

export function deselectAll() {
  return { type: DESELECT_ALL};
}

export function setSelection(column, id) {
  if (column.bulkSelection.mode === 'disabled' || column.bulkSelection.mode === 'none') {
    console.warn('Selection mode has been disabled');
    return {type: NO_EVENT};
  }

  return {
    type: SET_SELECTION,
    id,
    selectionMode: column.bulkSelection.mode
  };
}
