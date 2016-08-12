import { config } from './../utilities/configValues';
import React from 'react';
import uuid from 'uuid';

export const DATA_REQUEST = 'redux-datatable/rows/DATA_REQUEST';
export const DATA_FAILURE = 'redux-datatable/rows/DATA_FAILURE';
export const DATA_SUCCESS = 'redux-datatable/rows/DATA_SUCCESS';
export const NO_EVENT = 'redux-datatable/bulkAction/NO_EVENT';
export const SELECT_ALL = 'redux-datatable/bulkAction/SELECT_ALL';
export const DESELECT_ALL = 'redux-datatable/bulkAction/DESELECT_ALL';
export const SET_SELECTION = 'redux-datatable/bulkAction/SET_SELECTION';

const rowData= [
  {
    firstName:'Raif', lastName:'Harik', email:'f@u.com', id:uuid.v4()
  },
  {
    firstName:'Robbie', lastName:'Fuentes', email:'robbie@fuenties.com', id:uuid.v4()
  }
];

export default (state = rowData, action = null) => {
  switch (action.type) {
    case SELECT_ALL:
    {
      return state.map(x => {
        x.metaData = x.metaData || {};
        x.metaData.selected = true;
        return x;
      });
    }
    case DESELECT_ALL: {
      return state.map(x => {
        x.metaData = x.metaData || {};
        x.metaData.selected = false;
        return x;
      });
    }
    case SET_SELECTION: {
      let item = state.filter(x=>x[config.bulkSelection.identityColumn] === action.id)[0];
      item.metaData = item.metaData || {};
      item.metaData.selected = !item.metaData.selected;
      state.splice(state.findIndex(x => x[config.bulkSelection.identityColumn] === action.id), 1, item);
      return [...state];
    }
  }
  return state;
};

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

export function selectAll() {
  return { type: SELECT_ALL };
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

