import 'babel-core/polyfill';
import React from 'react';
import Root from './containers/Root';
import HashHistory from 'react-router/lib/HashHistory';
import BrowerHistory from 'react-router/lib/BrowserHistory';


let history;
/* eslint-disable */
if (__DEV__) {
/* eslint-enable */
    history = new HashHistory();
} else {
    history = new BrowerHistory();
}

React.render(
    <Root history={history}/>,
        document.getElementById('container')
);

