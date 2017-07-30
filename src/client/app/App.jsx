import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Example } from './component';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/example" component={Example} />
        <Redirect to="/example" />
      </Switch>
    </Router>
  );
}

export default App;
