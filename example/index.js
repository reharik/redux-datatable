import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from './components/App';
import './../app/src/css/index.css';

const store = configureStore();

render(
	<Provider store={store}>
		<App dispatch={store.dispatch} />
	</Provider>, document.getElementById('app'));

