import React from 'react';
import { Table } from '../../src/index';
import Promise from 'bluebird';
import uuid from 'uuid';

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

  const data= [
    {
      firstName:'Raif', lastName:'Harik', email:'f@u.com', id:uuid.v4()
    },
    {
      firstName:'Robbie', lastName:'Fuentes', email:'robbie@fuenties.com', id:uuid.v4()
    }
  ];

  const dataSource = function() {
    return Promise.resolve({ok:true, data});
  };

  const config = {
      bulkSelection: {
        mode:'single'
    },
    dataSource
  };

  return (<div className="redux__datatable__app" >
    <Table config={config} columns={columns} />
  </div>);
};
