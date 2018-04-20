import React from 'react';

import Person from './Person/Person';

const persons = (props) =>  props.persons.map( (persons,index) => {

        return <Person
          click={() => props.clicked(index)}
          name={persons.name}
          lastName={persons.lastName}
          position={persons.position}
          age={persons.age}
          picture={persons.picture}
          qoute={persons.qoute}
          key={persons.id}
          changed={(event) => props.changed(event, persons.id)}
          />

      });

export default persons;
