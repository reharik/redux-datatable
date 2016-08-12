import React from 'react';
import RowCell from './RowCell';
import uuid from 'uuid';

const Row = ({columns, data}) => {

  const cells = columns.map(c => {
    const style = c.hidden
      ? { display: 'none'}
      : { width: c.width || '100px'};
     const value = c.format
      ? c.format({column:c, value:data[c.property], row:data})
      : data[c.property];

    return (<RowCell text={value} style={style} className={c.className} key={uuid.v4()} />)
  });

  return (
    <div className="-redux__dataview-table__row">
      {cells}
    </div>
  )
};

Row.contextTypes = {
};

export default Row;

