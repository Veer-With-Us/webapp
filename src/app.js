import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Learn from './components/Learn.jsx';
import Sell from './components/Sell.jsx';
import Games from './components/Games.jsx';
import Store from './components/Store.jsx';
import Help from './components/Help.jsx';

import Sass from './styles/style.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Navbar}>
      <IndexRoute component={Main} />
      <Route path='learn' component={Learn} />
      <Route path='sell' component={Sell} />
      <Route path='games' component={Games} />
      <Route path='store' component={Store} />
      <Route path='help' component={Help} />
    </Route>
  </Router>,
  document.getElementById('app')
);
