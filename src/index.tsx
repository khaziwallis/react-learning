import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import Routing from './Routing';

import createBrowserHistory from "history/createBrowserHistory";
const customHistory = createBrowserHistory();


ReactDOM.render(
  <Router history={customHistory}>
  	<Route component={Routing} />
  </Router>,
  document.getElementById("content")
);