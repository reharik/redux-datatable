import {merge} from 'lodash';
import uuid from 'uuid';

let config = {
  dataSource: undefined,
  bulkSelection: {
    mode:'none',
    identityColumn: 'id'
  },
  actionDataProp: 'payload',
  tableName : uuid.v4()
  //bunch of default values here;
};

export function updateConfigs(newConfig) {
  console.log('=========="HERE"=========');
  console.log("HERE");
  console.log('==========END "HERE"=========');

  //TODO validate configs as we define them
  merge(config, newConfig);
  return config;
}

export { config };

// schema for bulkSelection
//  mode = multiple | single | disabled | none -> default multiple
// identityColumn -> default 'id' it is required to have either an id or some other identifying column
