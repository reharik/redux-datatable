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
        if (x.sortProperty === action.property) {
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
      property: column.sortProperty,
      dir: column.dir === 'asc' ? 'desc' : 'asc'
    };
  }
}

export function column (opts) {
  //TODO put in validation
  var sortProperty = opts.sortProperty || typeof property !== 'function' ? opts.property : '';
  var display = opts.display || typeof property !== 'function' ? opts.property : '';
  var sort = opts.sort;
  if(!sort || !sortProperty){
    sort = false;
  }

  return {
    property: opts.property,
    display,
    width: opts.width || '100px',
    additionalStyle: opts.additionalStyle,
    className: opts.className,
    headerClassName: opts.headerClassName,
    headerFormat: opts.headerFormat,
    hidden: opts.hidden,
    sort,
    sortProperty
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
