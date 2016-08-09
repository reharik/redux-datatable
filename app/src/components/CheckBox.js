import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectAll, deselectAll, setSelection } from './../modules/bulkactionModule';
import uuid from 'uuid';

const change = function(e, row, column, isHeader) {
  if(isHeader){
    if(e.currentTarget.checked){
      return selectAll();
    } else {
      return deselectAll();
    }
  } else {
    return setSelection(column, row.id);
  }
  // selectAll, deselectAll, setSelection
};

const checkBoxFactory = function(className, isHeader) {
  return  ({column, value, row}) => {
    return (
      <div>
        <input type="checkbox" className={className} onChange={e => change(e, row, column, isHeader) }/>
      </div>);
  }
};
export default (checkBoxFactory);

