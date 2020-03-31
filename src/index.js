/* Main Route Imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
/* Redux Imports*/
import { createStore, applyMiddleware, compose } from 'redux';
import axiosMiddleWare from './Redux/axiosMiddleware';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './Redux/RootReducer';
import { Provider } from 'react-redux';
/* Stylesheet */
import './assets/stylesheets/main.less'
/*Redux Persist Import */
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

/*Layout imports*/
import EmptyLayout from './Layout/EmptyLayout';
import MainLayout from "./Layout/MainLayout";
import RouteWithLayout from './Layout/RouteWithLayout';

/* Main Route Imports */
import SimpleBoilerContainer from './Containers/SimpleBoilerContainer';
import HomePageContainer from "./Containers/HomePageContainer";

import * as serviceWorker from './serviceWorker';

import "./assets/stylesheets/fontawesome-free/css/all.css"
import "./assets/stylesheets/adminlte.min.css"



const middleware = [thunk, axiosMiddleWare];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
};
const persistConfig = {
  key: 'NAVCrypto',
  storage,
  stateReconciler: hardSet,
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store;

if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(persistedReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
else {
  store = createStore(persistedReducer, applyMiddleware(...middleware));
}

// @todo: drive url routes from a config file for central control
ReactDOM.render(
  //   <div>
  //     <Favicon url="/src/assets/images/favicon.ico" />

          <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <Router>
              <Switch>
                <RouteWithLayout Layout={EmptyLayout} exact path="/Home" Component={SimpleBoilerContainer} />
                <RouteWithLayout Layout={MainLayout} exact path="/" Component={HomePageContainer} />
              </Switch>
            </Router>
            {/* </PersistGate> */}
          </Provider>,
  //   </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();