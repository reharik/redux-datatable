import { combineReducers } from 'redux';
import { tableReducers } from '../../src/index';

const reducers = combineReducers({
  ...tableReducers
});
export default reducers;
