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
  EmpDemo,
  Login,
  ForgotPass,
  SignUp,
  About,
  ApplyJob,
  ApplyThankYou,
  ApplyAllSavedJob,
  ApplyAllSavedJobThankYou,
  SavedJobs,
  AppliedJobs,
  Testimonial,
  SupportMain,
} from './component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/example" component={Example} />
        <Route path="/employer/createjob" component={InputPage} />
        <Route path="/employer/demo" component={EmpDemo} />
        <Route path="/employer/how-it-works" component={EmpHow} />
        <Route path="/employer/pricing" component={EmpPrice} />
        <Route path="/employer" component={EmpMain} />
        <Route path="/auth-demo" component={AuthDemo} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/job/apply/all-saved/thankyou" component={ApplyAllSavedJobThankYou} />
        <Route path="/job/apply/all-saved" component={ApplyAllSavedJob} />
        <Route path="/job/apply/:id/:name/thankyou" component={ApplyThankYou} />
        <Route path="/job/apply/:id" component={ApplyJob} />
        <Route path="/job/:id" component={JobDetails} />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={ForgotPass} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/saved-jobs" component={SavedJobs} />
        <Route path="/applied-jobs" component={AppliedJobs} />
        <Route path="/testimonial" component={Testimonial} />
        <Route path="/support" component={SupportMain} />
        <Route path="/" component={Landing} />
        <Redirect to="/example" />
      </Switch>
    </Router>
  );
}

export default App;
