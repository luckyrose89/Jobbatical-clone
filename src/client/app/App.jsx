import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Example, AuthDemo, InputPage, JobsDemo, Landing} from './component';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/example" component={Example} />
        <Route path="/input" component={InputPage} />
        <Route path="/auth-demo" component={AuthDemo} />
        <Route path="/jobs-demo" component={JobsDemo} />
        <Route path="/" component={Landing} />
        <Redirect to="/example" />
      </Switch>
    </Router>
  );
}

export default App;
