import React, { Component } from 'react';
import imgT from './facebook_avatar.svg';
import styles from './Style.css';



export default class Footer extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}



	}

	

	render() {

	// 	let avatar = {
		
	// 		position: 'relative',
	// 		margin: '0 14px',
	// 		display: 'inline-block',
	// 		color: '#039BD8',
	// 		texDecoration: 'none',
	// 		borderRadius: '100%',
	// 		fontSize: '30px',
	// 		height: '50px',
	// 		width: '50px',
	// 		webkitTransition: 'all ease .8s',
	// 		oTransition: 'all ease .8s',
	// 		transition: 'all ease .8s'
		
	// }
		let source = './facebook_avatar.svg';

		return (
			
			<footer className={styles.navigation}>
				<section id="contact-section">
					<div className={styles.wrapper}>
						<h2 className={styles.title}>Pridružite nam se!</h2> <br/>
						<p className={styles.contactMessage}>Sve što je potrebno jeste da pošaljete mail na:</p>
						<a href="mailto:office@devcenter.rs" className={styles.contactEmail}>office@devcenter.rs</a>
						<div className={styles.findUsVia}>
							<div className={styles.socialNetworks}>
								
								<a href="https://www.facebook.com/RazvojniCentarZrenjanin/" target="_blank" class="contact-icon">
									{/* <i class="fab fa-facebook"></i> */}
									<i class="ion-social-facebook" />
								</a>
								<a href="#" class="contact-icon">
									{/* <i class="icon ion-social-twitter"></i> */}
									<i class="fab fa-twitter"></i>
								</a>
								<a href="#" class="contact-icon">
									<i class="icon ion-social-googleplus"></i>
								</a>
							</div>
						</div>
						<p className={styles.copyright}>© Development Center {(new Date().getFullYear())}. All rights reserved.</p>

					</div>
					
				</section>
			</footer>
		);



	};
}

