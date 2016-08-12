import React from 'react';
import HeaderCell from './HeaderCell';
import uuid from 'uuid';

const Header = ({columns}) => {
  const getValue = function(c) {
   let text = c.display || c.property;
   return c.headerFormat
      ? c.headerFormat({column:c, value:text, row:columns})
      : text;
  };
  return (
    <div className="-redux__dataview-table__header">
      { columns.map(c => (<HeaderCell value={getValue(c)} column={c} key={uuid.v4()} /> )) }
    </div>);
};

Header.contextTypes = {
};

export default Header;

