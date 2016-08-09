import React from 'react';
import Header from './Header';
import Row from './Row';
import uuid from 'uuid';

const Table = ({columns, tableData}) => {
  return (
    <div style={{"marginTop": "10px"}}>
      <Header columns={columns} />
      {tableData.map(d => (<Row columns={columns} data={d} key={uuid.v4()} />))}
    </div>);
}

Table.contextTypes = {
};

export default Table;

