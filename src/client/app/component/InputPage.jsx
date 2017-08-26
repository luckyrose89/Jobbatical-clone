import React, { Component } from 'react';
import { Values } from 'redux-form-website-template';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import InputForm from './InputForm';
import Header from './header';
import Footer from './footer';
import createNewJob from './createNewJob';

class CreateJob extends Component {
  constructor(props) {
    super(props)
  }
   render() {
    return (
      <div>
        <Header />
        <InputForm onSubmit={createNewJob} />
        <Footer />
      </div>
    )
  }
}

CreateJob.propTypes = {
}

function mapStateToProps(state) {
}

export default connect(mapStateToProps)(CreateJob)
export { CreateJob };
