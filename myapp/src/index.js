import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'antd/dist/antd.css';
import "./iconfont/iconfont.css";
import App from './layout/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk" ;
import Reducers from "./reducers/index"
const store = createStore(
    Reducers,
    compose(
        applyMiddleware(thunk)
        ) 
)

    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>, 
            document.getElementById('root')
        );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

