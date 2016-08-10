import deepAssign from 'deep-assign';

let config = {
  dataSource: null,
  bulkSelection: {
    mode:'none',
    identityColumn: 'id'
  }
  //bunch of default values here;
};

export function updateConfigs(newConfig) {
  //TODO validate configs as we define them
  deepAssign(config, newConfig);
  return config;
}

export { config };
