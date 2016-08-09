import { config } from './../utilities/configValues';
import checkBoxFactory from './../components/CheckBox';
export const NO_EVENT = 'redux-dataview/bulkAction/NO_EVENT';
export const SELECT_ALL = 'redux-dataview/bulkAction/SELECT_ALL';
export const DESELECT_ALL = 'redux-dataview/bulkAction/DESELECT_ALL';
export const SET_SELECTION = 'redux-dataview/bulkAction/SET_SELECTION';

export default (state = {}, action = null) => {
  return state;
};

const handleSelectionEvent = function(selectionEvent) {

  if (config.HANDLE_BEFORE_SELECTION) {
    config.HANDLE_BEFORE_SELECTION(selectionEvent);
  }

  if (config.HANDLE_BEFORE_BULKACTION_SHOW) {
    config.HANDLE_BEFORE_BULKACTION_SHOW(selectionEvent);
  }

  this.dispatch(selectionEvent);

  if (config.HANDLE_AFTER_SELECTION) {
    config.HANDLE_AFTER_SELECTION(selectionEvent);
  }

  if (config.HANDLE_AFTER_BULKACTION_SHOW) {
    config.HANDLE_AFTER_BULKACTION_SHOW(selectionEvent);
  }
};

export function selectAll() {
  return handleSelectionEvent({ type: SELECT_ALL });
}

export function deselectAll() {
  return handleSelectionEvent({ type: DESELECT_ALL});
}

export function setSelection(column, id) {
  if (!column.bulkSelection || !column.bulkSelection.mode || column.bulkSelection.mode === 'disabled') {
    console.warn('Selection mode has been disabled');
    return {type: NO_EVENT};
  }

  return handleSelectionEvent({
    type: SET_SELECTION,
    id,
    selectionMode: column.bulkSelection.mode
  });
}

export const bulkActionColumn = {
  property: 'checkbox',
  width: '30px',
  format: checkBoxFactory(),
  headerFormat: checkBoxFactory('', true),
  hidden: false
};
