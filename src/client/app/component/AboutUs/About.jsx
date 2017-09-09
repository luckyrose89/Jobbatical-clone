import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './about-styles.global.css';
import Header from '../header';
import Footer from '../footer';
import boy from '../../../../../assets/images/boy.png';
import man from '../../../../../assets/images/man.png';
import girl from '../../../../../assets/images/girl.png';
import anothergirl from '../../../../../assets/images/girl2.png';

class About extends Component {
	render() {
		return(
			<div>
				<Header/>
				<div className="about-body">
					<section className="about-title spacing">
						<div className="about-header">
							<h1>Meet Our Team That brings You JobsOnTheGo</h1>
						</div>
					</section>
					<div className="about-intro">
						<article className="wrap spacing">
							<h2>
								Our team is full of dedicated individuals that are determined to help you with finding an ideal job. We believe that every encounter with a new job is an opportunity for you to grow and advance. Life is too short to sit around and be complacent. 
								<div>Live, Learn, and Upgrade! </div>
							</h2>
						</article>
					</div>
					<section className="teammate spacing">
						<img src={boy} />
						<b>The Neighbor Next Door</b>
						<p>Founder & CEO</p>
					</section>
					<p className="clear"></p>
					<section className="teammate-right spacing">
						<img src={girl} />
						<b>The One Full of Motivations</b>
						<p>Co-founder</p>
					</section>
					<p className="clear"></p>
					<section className="teammate spacing">
						<img src={man} />
						<b>The One Full of Ideas</b>
						<p>Chief Product Officer</p>
					</section>
					<p className="clear"></p>
					<section className="teammate-right spacing">
						<img src={anothergirl} />
						<b>Master of Persuasion</b>
						<p>Head of Sales</p>
					</section>
					<p className="clear"></p>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default About;