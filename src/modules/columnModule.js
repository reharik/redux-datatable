import React from 'react';
import {config} from './../utilities/configValues';

export const SET_COLUMNS = 'redux-datatable/column/SET_COLUMNS';
export const SORT = 'redux-datatable/column/SORT';

export default (state = [], action = null) => {
  switch (action.type) {
    case SET_COLUMNS: {
      return action.columns;
    }
    case SORT: {
      return state.map(x => {
        if (x.property === action.property) {
          x.dir = x.dir === 'asc' ? 'desc' : 'asc';
        } else {
          x.dir = '';
        }
        return x;
      });
    }
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

export function sort(column) {
  if(config.sortAsync){

  }else {
    return {
      type: SORT,
      property: column.property,
      dir: column.dir === 'asc' ? 'desc' : 'asc'
    };
  }
}

export function column (opts) {
  //TODO put in validation
  return {
    property: opts.property,
    display: opts.display || opts.property,
    width: opts.width || '100px',
    additionalStyle: opts.additionalStyle,
    className: opts.className,
    headerClassName: opts.headerClassName,
    format: opts.format,
    headerFormat: opts.headerFormat,
    hidden: opts.hidden,
    sort: opts.sort
  }
}

//
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
