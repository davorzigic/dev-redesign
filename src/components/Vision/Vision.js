import React, { Component } from 'react';
import styles from './Style.css';



export default class Vision extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}



	}

	render() {


		return (
			<section>
				<div className={styles.wrapper}>
					<p className={styles.visionMessage}>Kvalitetan inženjer se postaje mukotrpnim radom i tu ne postoje prečice.
						U RC-u studenti rade na projektima, koji optimizuju njihovo učenje,
							zahtevaju visoku posvećenost i timski rad.</p>
				</div>
			</section>
		);



	};
}