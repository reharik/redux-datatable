import React from 'react';
import { Table } from '../../app/src/index';

export default () => {
//example of custom component rendering
  const EmailLink = ({column, value, row}) => (
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
      format: ({column, value, row}) => {
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
      format: ({ column, value, row }) => {
        return (
          <span> Name: { value } </span>
        );
      },
      hidden: false
    },
    {
      property: 'email',
      display: 'Email',
      width: '100px',
      className: 'additional-class',
      headerClassName: 'someHeaderName',
      format: EmailLink,
      headerFormat: ({ column, value, row }) => {
        return (<div style={{color:"Red"}} >value</div>);
      },
      hidden: false
    },
    {
      property:'id',
      hidden: true
    }
  ];

  const config = {
      bulkSelection: {
        mode: 'multiple'
    }
  };

  return (<div className="app" >
    <Table config={config} columns={columns} />
  </div>);
};
