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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet tincidunt nibh, vitae fermentum urna. Nam mattis, urna quis tincidunt faucibus, sapien arcu finibus leo, id scelerisque lorem nunc at dui. Nulla ullamcorper ornare purus et commodo. Mauris euismod accumsan metus, sed ornare velit facilisis vitae. Mauris consequat, dolor in gravida dignissim, nulla sem euismod lacus, molestie hendrerit ex risus eu ex. Maecenas nec hendrerit quam, quis scelerisque metus. Nulla porta dui id ex lacinia facilisis. 
							</h2>
						</article>
					</div>
					<section className="teammate spacing">
						<img src={boy} />
						<b>abcdefg abcd</b>
						<p>Founder & CEO</p>
					</section>
					<p className="clear"></p>
					<section className="teammate-right spacing">
						<img src={girl} />
						<b>panhdks shudj</b>
						<p>Co-founder</p>
					</section>
					<p className="clear"></p>
					<section className="teammate spacing">
						<img src={man} />
						<b>zabxjakxlklxl</b>
						<p>Chief Product Officer</p>
					</section>
					<p className="clear"></p>
					<section className="teammate-right spacing">
						<img src={anothergirl} />
						<b>shdahdijwkd</b>
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