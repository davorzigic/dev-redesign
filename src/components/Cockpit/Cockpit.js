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
			<h1>Hi, I am a React App</h1>
			<p className={assignedClasses.join(' ')}>Our students:</p>
			<button
				className={btnClass}
				onClick={props.clicked}>Toggle Students</button>
		</div>
	);



};

export default cockpit;