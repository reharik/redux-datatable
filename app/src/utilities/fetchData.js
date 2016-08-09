import 'isomorphic-fetch';
import { DATA_REQUEST, DATA_FAILURE, DATA_SUCCESS } from './../modules/rowsModule'
import { config } from './configValues';

const handleUrl = function() {
  fetch(config.dataSource)
    .then(response =>
      response.json().then(json => ({json, response}))
    ).then(({json, response}) => {
    if (!response.ok) {
      dispatch({
        type: DATA_FAILURE,
        error: error.message || 'wtf'

      });
      return Promise.reject(json)
    }
    dispatch({
      type: DATA_SUCCESS,
      data: response
    })
  })
};

const handlePromise = function() {
  config.dataSource()
    .then(response => {
      if (!response || !response.ok) {
        dispatch({
          type: DATA_FAILURE,
          error: response.error || response.message || 'wtf'
        });
      }
      dispatch({
        type: DATA_SUCCESS,
        data: response
      })
    })
};

const handleDispatch = function() {
  dispatch(config.dispatchDataSource());
};

function fetchData() {
  dispatch({
    type: DATA_REQUEST
  });
  if (typeof config.dataSource === 'function') {
    handlePromise();
  } else if (typeof config.dataSource === 'string') {
    handleUrl();
  } else if (typeof config.dispatchDataSource === 'function'){
    handleDispatch();
  }
}

export default fetchData;
