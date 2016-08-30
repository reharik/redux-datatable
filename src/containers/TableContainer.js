import { connect } from 'react-redux';
import Table from '../components/Table';
import initialize from './../utilities/initialize'
import { sort } from './../modules/columnModule'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return {
    columns: state.columns,
    tableData: state.tableData
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  initialize(dispatch, ownProps);
  return {sort: bindActionCreators(sort, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
