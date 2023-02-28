import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {   applyMiddleware,compose, createStore } from 'redux';
import { createLogger } from "redux-logger";

// import reducers from './reducers/index';
import thunk from "redux-thunk"
import App from './App';
import post from './reducer/postreducer';
// import registration from './reducers/registration';


const logger = createLogger();

applyMiddleware(logger)

const store = createStore(post , applyMiddleware(compose(thunk)),      
)
// const store2 = createStore(post, applyMiddleware(compose(thunk)))
//


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider> 
  </React.StrictMode>
);
