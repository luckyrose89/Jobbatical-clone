import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';

import EmpHeader from './EmpHeader';
import Footer from '../footer';
import EmpRequestForm from'./EmpRequestForm';

import { moreInfo } from '../../action';
import styles from './EmpPrice.scss';

class EmpPrice extends Component{
	constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
  	}

  	componentDidMount(props) {
 	}

	handleSubmit(values) {
		const { dispatch } = this.props
		var newValue = Object.assign({},values,{'inquiry':'pricing'})
	    dispatch(moreInfo(newValue))
	}

	render() {
		return(
			<div>
				<EmpHeader />
				<section className={ styles['pricing']}>				
					<div className={ styles['contact-for-more'] }>
						<h3 className={ styles['pricing-title'] }>Pricing</h3>
						<div className={ styles['pricing-content'] }>Contact Us for Details
							<div className={ styles['pricing-content-detail'] }>We are here to serve you!</div>
							<div className={ styles['pricing-content-detail'] }>Bundle options avaiable.</div>
						</div>
						<EmpRequestForm onSubmit = { this.handleSubmit }/>
					</div>
				</section>
				<Footer />
				
				
				
			</div>
		)
	}
}

EmpPrice.propTypes = {
  
}

function mapStateToProps(state) {
  const { isRequestingMoreInfo, requestMoreInfo } = state.empMoreInfo

  return {
    isRequestingMoreInfo,
    requestMoreInfo,
  }
}

export default connect(mapStateToProps)(EmpPrice)
export { EmpPrice };

