import React from 'react';
import $ from 'jquery';

import styles from './JobsDemo.scss';

class JobApp extends React.Component {
  constructor(props) {
    super(props);
    //define initial state
    this.state = {
      jobsArr: []
    }
  }

  componentDidMount() {
    //request data after components mounts
    this.jobList();
  }

  componentWillUpdate() {

  }

  jobList() {
    return $.getJSON('http://localhost:3000/api/job')
      .then((data) => {
        this.setState({ jobsArr: data });
      });
  }

  render() {
    return (
      <div className = "container">
        <Header list = {this.state.jobsArr}/>
        <Listjobs list = {this.state.jobsArr}/>
      </div>
    )
  }
}


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  queryKeyword(){
    var search = document.getElementById("keyword").value
    console.log(search)
    console.log(this)
    return $.getJSON('http://localhost:3000/api/job/keyword/'+search)
    .then((data) => {
      console.log(data);
    });
  }

  render() {
    var list = this.props
    return(
      <div>
        <input type="text" id="keyword" placeholder=" keyword" />
        <button type="submit" onClick={this.queryKeyword}> Search Job Keyword </button>
      </div>
    )
  }

}

class Listjobs extends React.Component {

  render() {
    const list = this.props.list
    console.log(list)
    const jobs = list.map((job)=>{
      return(
      <div className={styles.job_details} key={ job._id.toString() }>
        <a href={"/api/job/" + job._id }>
          <h4> {job.name} </h4>
          <p> Employment Type: {job.employmentType} </p>
          <p> Description: {job.description} </p>
        </a>
      </div>
      )
    })
    return (
      <div>
        <div className={styles.jobs}>{ jobs }</div>
      </div>
    );
  }
}

export default JobApp;
