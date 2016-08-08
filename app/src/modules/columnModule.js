// export const INCREMENT_DATE = 'redux-dataview/column/INCREMENT_DATE';
import React from 'react';

//example of custom component rendering
const EmailLink = (column, value, row) => (
  <div>
    <a href={'mailto:' + value}>{value}</a>
  </div>);



const columns= [
  {
    property:'firstName',
    display:'First Name',
    width: '100px',
    className: 'additional-class',
    headerClassName: 'someHeaderName',
    format: ( column, value, row ) => {
      return (
        <span> Name: { value } </span>
      );
    },
    hidden: false
  },
  {
    property:'lastName',
    display:'Last Name',
    width: '100px',
    className: 'additional-class',
    headerClassName: 'someHeaderName',
    format: ( column, value, row ) => {
      return (
        <span> Name: { value } </span>
      );
    },
    hidden: false
  },
  {
    property:'email',
    display:'Email',
    width: '100px',
    className: 'additional-class',
    headerClassName: 'someHeaderName',
    format: EmailLink,
    hidden: false
  },
  {
    property:'id',
    hidden: true
  }
];




export default (state = columns, action = null) => {
  return state;
};


// export function incrementDate(viewType) {
//   return {
//     type: INCREMENT_DATE,
//     viewType
//   };
// }

