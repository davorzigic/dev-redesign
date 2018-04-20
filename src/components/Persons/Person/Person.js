import React from 'react';
import classes from './Person.css';





const person = (props) => {



	return (
		<div className={classes.Person}>


			<table className={classes.table}>
			<tbody>
					<tr>
						<th rowSpan="2" className={classes.th}>
							<img src={props.picture} alt='something' class={classes.picture} />							
						</th>
						<td className={classes.td}>
							<p className={classes.info}>I am {props.name} and I am {props.age} years old!</p>
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
