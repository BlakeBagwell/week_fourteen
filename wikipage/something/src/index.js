import React from 'react';
import ReactDOM from 'react-dom';
import SomethingContainer from './Something';
import somethingReducer from './Something.reducer';
import './index.css';
import * as actions from './Something.actions';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';

const reducer = Redux.combineReducers({
  something: somethingReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);



ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <SomethingContainer/>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
