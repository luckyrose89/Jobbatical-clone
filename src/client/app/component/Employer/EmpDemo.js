import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';

import EmpHeader from './EmpHeader';
import Footer from '../footer';
import EmpRequestForm from'./EmpRequestForm';

import { moreInfo } from '../../action';
import styles from './EmpDemo.scss';

class EmpDemo extends Component{
	constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
  	}

  	componentDidMount(props) {
 	}

	handleSubmit(values) {
		var newValue = Object.assign({},values,{'inquiry':'demo'})
	    moreInfo(newValue)
	}

	render() {
		return(
			<div>
				<EmpHeader />
				<section className={ styles['demo']} >
					<div className={ styles['contact-for-more'] }>
						<h3 className={ styles['demo-title'] }>Demo Time</h3>
						<div className={ styles['demo-content'] }>Contact Us for a fabulous demo
							<div className={ styles['demo-content-detail'] }>Our team will demostrate the work flow </div>
							<div className={ styles['demo-content-detail'] }>along with some real success examples </div>
						</div>
						<EmpRequestForm onSubmit = { this.handleSubmit }/>
					</div>
				</section>
				<Footer />
			</div>
		)
	}
}

export default EmpDemo;

