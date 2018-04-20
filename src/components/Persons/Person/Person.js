import React from 'react';
import classes from './Person.css';





const person = (props) => {



	return (
		<div className={classes.Person} onMouseOver={classes.something}>
			<table className={classes.table}>
			<tbody>
					<tr>
						<th rowSpan="2" className={classes.th}>
							<img src={props.picture} alt='something' class={classes.picture} />							
						</th>
						<td className={classes.td}>
							<h1 className={classes.title}>{props.name} {props.lastName}</h1>
							<p className={classes.position}>{props.position}</p>
						</td>
					</tr>
					<tr>
						<td className={classes.td}>
							<p className={classes.info}>{props.qoute}</p>
						</td>
					</tr>
				</tbody>
			</table>

			



			{/* <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
			<br />
			<img src={props.picture} alt='something' class={classes.picture} /> */}
		</div>

	)
};



export default person;
