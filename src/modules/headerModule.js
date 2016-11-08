import {SELECT_ALL,DESELECT_ALL} from './dataRowModule'


export default (state = {}, action = null) => {
  switch (action.type) {
    case SELECT_ALL: {
      return state = {...state, selectAll: true};
    }
    case DESELECT_ALL: {
      return state = {...state, selectAll: false};
    }
  }
  return state;
};


