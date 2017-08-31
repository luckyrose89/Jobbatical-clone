import React, {Component} from 'react';
import styles from './EmpHowItWork.scss';
import 'bootstrap/dist/css/bootstrap.css';
import FontAwesome from 'react-fontawesome';

class EmpHowItWork extends Component {
	render() {
		return(
			<section className={ styles['How-It-Works'] }>
				<div className={ styles['How-split'] }>
					<div>
						<h3  className={ styles["how-title"]}>How-It-Works</h3>
						<div className={ styles["how-detail"]}>
							<FontAwesome
						        className='super-crazy-colors'
						        name='newspaper-o'
						        size='2x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						    />
							<span className={ styles["how-line"] }>You post an opening</span>					    
					    </div>
						<div className={ styles["how-detail"]}>
							<FontAwesome
						        className='super-crazy-colors'
						        name='address-card-o'
						        size='2x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						    />
							<span className={ styles["how-line"] }>Talents apply to your opening</span>					    
					    </div>
						<div className={ styles["how-detail"]}>
							<FontAwesome
						        className='super-crazy-colors'
						        name='users'
						        size='2x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						    />
							<span className={ styles["how-line"] }>You learn about talents. Talents learn about you.</span>					    
					    </div>
					    <div className={ styles["how-detail"]}>
							<FontAwesome
						        className='super-crazy-colors'
						        name='handshake-o'
						        size='2x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						    />
							<span className={ styles["how-line"] }>Secure partnership</span>
					    </div>
					    <div className={ styles["how-detail"]}>
							<FontAwesome
						        className='super-crazy-colors'
						        name='money'
						        size='2x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						    />
						    <span className={ styles["how-line"] }>EmployersOnTheGo receives a commision</span>
					    </div>
					</div>
					<div className={ styles['how-background'] }>
						<span>
							<FontAwesome
						        className='super-crazy-colors'
						        name='heart-o'
						        size='5x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						    />					
						</span>					
						<span>
							<FontAwesome
						        className='super-crazy-colors'
						        name='globe'
						        size='5x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						    />					
						</span>
					</div>
				</div>
			</section>

		)
	}
}

export default EmpHowItWork;