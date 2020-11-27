import {applyMiddleware, createStore} from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';

import rootReducer from "./reducers/rootReducers";
import { Provider} from "react-redux";
import App from './App';
import thunk from "redux-thunk";
import React from "react";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
