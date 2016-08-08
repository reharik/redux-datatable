import { combineReducers } from 'redux';
import { tableReducers } from '../../app/src/index';

const reducers = combineReducers({
  ...tableReducers
});
export default reducers;
