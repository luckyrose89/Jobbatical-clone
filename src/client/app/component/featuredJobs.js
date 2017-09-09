import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Featured extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		fetch('/api/job/featured/9')
	    .then(response => {return response.json()})
	    .then(json => {
		    this.setState({
		    data: json});
		});
	}
	render() {
		var date;
		const items = this.state.data.map(item => (
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4" key={item._id.toString()}>
							<Link to={"/job/" + item._id }>
								<div className="jobCard">
									<div className='job-picture'><img className='job-image' src={item.pictures}></img></div>
									<div className="job-desc">
										<h4 key={item._id.toString()}>{item.name}</h4>
										<p key={item.location} className="companyLoc">At <span className="company">{item.hiringOrganization.name}</span>, {item.hiringOrganization.location.addressCity}, {item.hiringOrganization.location.addressCountry}</p>
									</div>
									<div className="jobCard-footer">
										<div className="pull-left">
											Expires {new Date(item.validThrough).getUTCDate()}-{new Date(item.validThrough).getUTCMonth() + 1}-{new Date(item.validThrough).getUTCFullYear()}
										</div>
										<div className="save-btn">
											<button className="btn">Save</button>
										</div>
									</div>
								</div>
							</Link>
						</div>
						));

		return (
			<section className="featured-jobs">
				<div className="container">
					<h3 className="header">Featured Jobs</h3>
					<div className="row jobs">
						<section className="container">
							{items}
						</section>
					</div>
				</div>
			</section>
		)
	}
}


export default Featured;