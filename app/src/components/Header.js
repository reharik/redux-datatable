import React from 'react';
import HeaderCell from './HeaderCell';
import uuid from 'uuid';

const Header = ({columns}) => {

  return (
    <div className="table__header">
      { columns.map(c => (<HeaderCell column={c} key={uuid.v4()} /> )) }
    </div>);
}

Header.contextTypes = {
};

export default Header;

