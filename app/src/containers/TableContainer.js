import { connect } from 'react-redux';
import Table from '../components/Table';
import initialize from './../utilities/initialize'

function mapStateToProps(state) {
  return {
    columns: state.columns,
    tableData: state.tableData
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  initialize(dispatch, ownProps);
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
