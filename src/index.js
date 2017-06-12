
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import App from './containers/app';

ReactDOM.render(
    <div className='container' data-component-name='index'>
      <Provider store={store}>
        <App />
      </Provider>
    </div>,
    document.getElementById('app'));
