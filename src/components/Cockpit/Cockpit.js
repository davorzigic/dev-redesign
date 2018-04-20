import React from 'react';
import classes from './Cockpit.css';
import team from '../../assets/images/team.png';

const cockpit = (props) => {

	const assignedClasses = [];
	let btnClass = '';

	if (props.ShowPersons) {
		btnClass = classes.Red;
	}
	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold);
	}


	return (
		<div id="team">
			<div className={classes.Cockpit}>
				<div className={classes.title}>
					<h1>Upoznajte naš tim:</h1>
				</div>
				<br />
				<div className={classes.center}>
					{/* <input type="image" src={team} border="0" alt="Submit" onClick={props.clicked} /> */}
					<button
						
						onClick={props.clicked}
						>Klik klik</button>
				</div>
			</div>
		</div>
	);



};

export default cockpit;