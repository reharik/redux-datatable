import {updateConfigs } from './configValues';
import { bulkSelectionColumn } from '../components/CheckBox';
import {setColumns} from './../modules/columnModule';

export default function(dispatch, ownProps) {
  var config = updateConfigs(ownProps.config);
  var columns = ownProps.columns;

  //TODO exptract into strategy or command pattern later
  if(config.bulkSelection.mode !== 'none'){
    columns.unshift(bulkSelectionColumn(config));
  }
  //TODO prolly do something like create default columns from data name here
  if(columns) {
    dispatch(setColumns(ownProps.columns))
  }
}
