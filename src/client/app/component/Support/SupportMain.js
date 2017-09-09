import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../header';
import Footer from '../footer';
import SupportForm from './SupportForm';

import { moreInfo } from '../../action';
import styles from './SupportMain.scss';

class SupportMain extends Component{
	constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
  	}

	handleSubmit(values) {
	    moreInfo(values)
	}

	render() {
		return(
			<div>
				<Header />
				<section className={ styles['support']} >
					<div className={ styles['contact-for-more'] }>
						<h3 className={ styles['support-title'] }>Need Support?</h3>
						<div className={ styles['support-content'] }>We've got you!
							<div className={ styles['support-content-detail'] }>Enter message and request below</div>
							<div className={ styles['support-content-detail'] }>and we will get back to you </div>
						</div>
						<SupportForm onSubmit = { this.handleSubmit }/>
					</div>
				</section>
				<Footer />
			</div>
		)
	}
}

export default SupportMain;

