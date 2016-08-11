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

// column schema
// {
//   property: 'email', :required
//     display: 'Email', defaults to property name
//   width: '100px',
//   additionalStyle: { max-width: 20px }
//   className: 'additional-class',
//   headerClassName: 'someHeaderName',
//   format: ({ column, value, row }) => {
//   return (<div style={{color:"Red"}} >value</div>);
// }
//   headerFormat: ({ column, value, row }) => {
//   return (<div style={{color:"Red"}} >value</div>);
// },
//   hidden: false
// }
