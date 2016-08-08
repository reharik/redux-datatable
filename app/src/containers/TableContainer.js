import { connect } from 'react-redux';
import Table from '../components/Table';
// import { updateConfigs } from './../utils/configValues';
import { updateConfigs } from './../utilities/configValues';

function mapStateToProps(state, ownProps) {
  const tableConfig = updateConfigs(ownProps.config);
  return {
    columns: state.columns,
    tableData: state.tableData
  };
}


export default connect(mapStateToProps)(Table);
