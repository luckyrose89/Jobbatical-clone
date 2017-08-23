import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';


import { Example, AuthDemo, InputPage, Landing, Jobs} from './component';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Landing} />
        <Route path="/example" component={Example} />
        <Route path="/input" component={InputPage} />
        <Route path="/auth-demo" component={AuthDemo} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/" component={Landing} />
        <Redirect to="/example" />
      </Switch>
    </Router>
  );
}

export default App;
