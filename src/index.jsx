import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime'

import reducers from './reducers';
import sagas from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  reducers,
  applyMiddleware(promise, sagaMiddleware)
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
