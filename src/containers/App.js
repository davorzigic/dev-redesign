import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Slider from '../components/Slider/Slider';
import Rotater from '../components/Text Rotater/Rotate';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Vision from '../components/Vision/Vision';
import TextAnimation from '../components/Text Animation/TextAnimation';
import Typist from 'react-reveal-text';
import ReactRevealText from 'react-reveal-text/lib/ReactRevealText';
import Davor from '../assets/images/members/test.jpg';
import Nikola from '../assets/images/members/nikolasiker.jpg';
import Sasa from '../assets/images/members/sasadobrilovic.jpg';




class App extends Component {
  
  state = {
    persons: [
      {id: 'asfa1', name : 'Davor', age : 29, picture: Davor, qoute: 'Improvise. Overcome. Adapt.' },
      {id: 'vasdf1', name : 'Nikola', age : 22, picture: Nikola, qoute: '“Don’t Let Yesterday Take Up Too Much Of Today.” -Will Rogers'},
      {id: 'asdf11', name : 'Sale', age : 22, picture: Sasa, qoute: ' “Today’s Accomplishments Were Yesterday’s Impossibilities.” – Robert H. Schuller'}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  randomAge = () => {
    return Math.floor(Math.random() * 30);
  }


  
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }


  render() {

    let persons = null;
    

    if (this.state.showPersons) {

      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
     
      ;

    }
 

  
    return (

        <div>
          <Header />
            <Rotater />
          <Slider />
          <Vision />
          {/* <TextAnimation /> */}
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler} />
          {persons}
          <Footer />
        </div>

    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Does this work now?'));
  }
}

export default App;
