import React, { Component } from 'react';
import Typist from 'react-typist';
import TextRotator from '../Text Rotater/TextRotater';
import styles from './style.css';
import 'C:/my-app/node_modules/react-typist/dist/Typist.css';
require('./style.css');


export default class Rotate extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}



	}



	createTable = () => {

		
			
		let table = []
	
			// Outer loop to create parent
			for (let i = 0; i < 3; i++) {
				let children = []
				//Inner loop to create children
				for (let j = 0; j < 5; j++) {
					children.push(<td>{`Column ${j + 1}`}</td>)
				}
				//Create the parent and add the children
				table.push(<tr>{children}</tr>)
			}
			return table
		}

	render() {

		let backgroundCss = {
			height:'0',
			width:'180px'
		}

		return (
			
			<div className="interactive">
				<section className={styles.splashViz}>
					<h1 className={styles.splashVizHeading}>
						<span> želiš da</span>
						{/* <TextRotator delay={ 5000 } repeatDelay={ 5000 } maxWidth={ 110 } /> */}
						<div className={styles.textRotater}>
							<div className={styles.textRotaterWrap} style={backgroundCss}>
						    						   						
							<Typist>
								<Typist.Delay ms={1500} />	
								programiraš?
								<Typist.Delay ms={1500} />
								<Typist.Backspace count={12} delay={200} />
								učiš?
								<Typist.Delay ms={1500} />
								<Typist.Backspace count={5} delay={200} />
								napreduješ?
								
          		</Typist>
							)}
								{/* <span>programiraš</span>
								<span>učiš</span>
								<span>napreduješ</span> */}
							</div>
						</div>
					</h1>
				</section>
			</div>
		);
	}



}


