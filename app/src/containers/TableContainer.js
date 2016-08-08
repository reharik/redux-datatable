import { connect } from 'react-redux';
import Table from '../components/Table';
// import { updateConfigs } from './../utils/configValues';

function mapStateToProps(state, ownProps) {
  return {
    columns: state.columns,
    tableData: state.tableData
  };
}


export default connect(mapStateToProps)(Table);
