import React from 'react';
import {Route} from 'react-router';
import App from 'components/App';
import Home from 'components/Home';
import OfficeLayout, * as Offices from 'components/offices';
import * as CraftCategories from 'components/craft-categories';
import * as Clinics from 'components/clinics';
import Playground from './playground';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route component={OfficeLayout}>
      <Route path="/offices" component={Offices.List} />
      <Route path="/offices/:officeId/details" component={Offices.Detail} />
    </Route>
    <Route path="/craft-categories" component={CraftCategories.List} />
    <Route path="/clinics" component={Clinics.List} />
    <Route path="/playground" component={Playground} />
  </Route>
);

export default routes;
