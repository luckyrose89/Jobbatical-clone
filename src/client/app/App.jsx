import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import {
  Example,
  AuthDemo,
  InputPage,
  Landing,
  Jobs,
  JobDetails,
  EmpMain,
  EmpHow,
  EmpPrice,
} from './component';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Landing} />
        <Route path="/example" component={Example} />
        <Route path="/employer/createjob" component={InputPage} />
        <Route path="/employer/how-it-works" component={EmpHow} />
        <Route path="/employer/pricing" component={EmpPrice} />
        <Route path="/employer" component={EmpMain} />
        <Route path="/auth-demo" component={AuthDemo} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/job/:id" component={JobDetails} />
        <Route path="/" component={Landing} />
        <Redirect to="/example" />
      </Switch>
    </Router>
  );
}

export default App;
