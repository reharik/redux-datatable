import React from 'react';

const HeaderCell = ({column}) => {
  const style = column.hidden
    ? { display: 'none'}
    : { width: column.width || '100px' };
  const className = `header__cell ${column.headerClassName || ''}`;
  const value = column.display || column.property;

  return (
    <div className={className} style={style} >{value}</div>
  );
};

HeaderCell.contextTypes = {
};

export default HeaderCell;

