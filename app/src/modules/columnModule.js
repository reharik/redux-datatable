import React from 'react';

export const SET_COLUMNS = 'redux-dataview/column/SET_COLUMNS';

export default (state = [], action = null) => {
  if(action.type === SET_COLUMNS){
    state = action.columns;
  }
  return state;
};


export function setColumns(columns) {
  //TODO validateColumns here please
  return {
    type: SET_COLUMNS,
    columns
  };
}

