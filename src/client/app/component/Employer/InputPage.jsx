import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import InputForm from './InputForm';
import EmpHeader from './EmpHeader';
import Footer from '../footer';

import {createNewJob} from '../../action';

class CreateJob extends Component {
  constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(props) {
  }

  handleSubmit(values) {
    const { dispatch } = this.props
    dispatch(createNewJob(values))
  }

   render() {
    return (
      <div>
        <EmpHeader />
        <InputForm onSubmit= {this.handleSubmit}/>
        <Footer />
      </div>
    )
  }
}

CreateJob.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { isPostingJob, postJob } = state.createNewJob

  return {
    isPostingJob,
    postJob,
  }
}

export default connect(mapStateToProps)(CreateJob)
export { CreateJob };
