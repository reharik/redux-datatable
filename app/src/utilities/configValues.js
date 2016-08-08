
const config = {
  dataSource: null
  //bunch of default values here;
};

export function updateConfigs(newConfig) {
  //TODO validate configs as we define them
  return Object.assign(config, newConfig);
}

export { config };
