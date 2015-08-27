import React from 'react';
import {Route} from 'react-router';
import App from 'components/App';
import Page from 'components/Page';

const routes = (
  <Route path="/" component={App} >
    <Route path="page" component={Page} />
  </Route>
);

export default routes;
