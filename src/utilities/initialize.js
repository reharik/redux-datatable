import {config, updateConfigs } from './configValues';
import  fetchData from './fetchData';
import { bulkSelectionColumn } from '../components/CheckBox';
import {setColumns, column} from './../modules/columnModule';

export default function(dispatch, ownProps) {
  if(config.initialized){ return; }

  var newConfig = ownProps.config;
  newConfig.initialized = true;
  var _config = updateConfigs(newConfig);
  var columns = ownProps.columns;
  //TODO exptract into strategy or command pattern later
  if(_config.bulkSelection.mode !== 'none'){
    columns.unshift(bulkSelectionColumn(_config));
  }
  //TODO prolly do something like create default columns from data name here
  if(columns) {
    var map = columns.map(column);
    dispatch(setColumns(map))
  }

  if(_config.dataSource || _config.dispatchDataSource) {
    fetchData(dispatch, _config);
  }
}
