import { connect } from 'react-redux';
import Table from '../components/Table';
// import { updateConfigs } from './../utils/configValues';
import {config, updateConfigs } from './../utilities/configValues';
import {setColumns} from './../modules/columnModule';
import { bulkActionColumn } from './../modules/bulkactionModule';

function mapStateToProps(state, ownProps) {
  const tableConfig = updateConfigs(ownProps.config);
  return {
    columns: state.columns,
    tableData: state.tableData
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  var columns = ownProps.columns;
  if(config.bulkSelection){
    columns.unshift(bulkActionColumn);
  }
  //TODO prolly do something like create default columns from data name here
    if(columns) {
    dispatch(setColumns(ownProps.columns))
  }
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
