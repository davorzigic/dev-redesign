import React from 'react';
import classes from './Cockpit.css';

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
		<div className={classes.Cockpit}>
			<div className={classes.title}>
				<h1>Meet our students:</h1>
			</div>
			<br/>
			<div className={classes.center}>
				<button
					className={btnClass}
					onClick={props.clicked}>Click here</button>
			</div>
		</div>
	);



};

export default cockpit;