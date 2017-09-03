import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import styles from './ApplyThankYou.scss';


export class ApplyThankYou extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    console.log('id',this.props.match.params.id)
  }

  componentWillUnmount() {
  }


  render() {
    const jobTitle = this.props.match.params.name;
    const id = this.props.match.params.id;

    return (
      <section>
        <Header />
        <div className={styles['thank-you-message']}>
          <div>You have applied for <strong>{jobTitle}</strong> through JobsOnTheGo!</div>
          <Link to="/jobs"><div>Explore and Apply for More Openings!</div></Link>
        </div>
        <Footer />
      </section>
    );
  }
}

ApplyThankYou.propTypes = {

};

const mapStateToProps = (state, props) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(ApplyThankYou);
