import React from 'react';

const HeaderCell = ({column, value}) => {
  const style = column.hidden
    ? { display: 'none'}
    : { width: column.width || '100px' };
  const className = `redux__datatable__header__cell ${column.headerClassName || ''}`;
  
  return (
    <div className={className} style={style} >{value}</div>
  );
};

HeaderCell.contextTypes = {
};

export default HeaderCell;

