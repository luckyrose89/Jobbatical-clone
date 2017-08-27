import React, { Component } from 'react';
import { Values } from 'redux-form-website-template';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types'
import InputForm from './InputForm';
import EmpHeading from './EmpHeader';
import Footer from '../footer';
import createNewJob from './createNewJob';

class CreateJob extends Component {
  constructor(props) {
    super(props)
  }
   render() {
    return (
      <div>
        <EmpHeading />
        <InputForm onSubmit={createNewJob} />
        <Footer />
      </div>
    )
  }
}

CreateJob.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

function mapStateToProps(state) {
}

export default connect(mapStateToProps)(CreateJob)
export { CreateJob };
