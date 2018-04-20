import React, { Component } from 'react';
import logo from '../../assets/images/logoDevWhite.png';
import styles from './style.css';
require('./style.css');

export default class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}



	}
	

	render() {



		let navigation = {
		// 	-webkit-box-flex: 0;
		// -ms-flex: 0 0 auto;
		flex: '0 0 auto',
		// -webkit-transition: background 250ms;
		transition: 'background 250ms',
		background: '#2B3A42'

		}

		return (
			<header className={styles.navigation}>
				<div className={[styles.container, styles.navigationInner].join(' ')}>
					<a href="/" className={styles.navigationLogo}> <img className={styles.logo} src={logo} alt="webpack logo" /></a>
					<nav className={styles.navigationLinks}>
						<a href="" className={styles.navigationLink}>Vizija</a>
						<a href="#team" className={styles.navigationLink}>Tim</a>
						<a href="#contact-section" className={styles.navigationLink}>Kontakt</a>
					</nav>
				</div>
			</header>
		);



	};
}

