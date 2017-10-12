import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import App from './routes/IndexPage';
import Users from './routes/Users';
import Menu1 from './routes/Menu1';
import Menu2 from './routes/Menu2';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Users} />

        <Route path="/user" component={Users} />
        <Route path="/menu1" component={Menu1} />
        <Route path="/menu2" component={Menu2} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
