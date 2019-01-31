import React, { Component } from 'react';
import './App.css';
//should be uppser case char, lower case is reserved for html components
import Person from './Person/Person';

class App extends Component {
  //state is property of class, and managed inside class components
  state = {
    persons: [
      { name: "Yurie in STATE", age: 4},
      { name: "Max in STATE", age: 6}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    //DONT DO THIS: this.state.persons[0].name = "OVERWRITE";
    //component object has setState property
    this.setState({
      persons: [
        { name: 'name inside switchnamehandler', age: 4},
        { name: 'name inside switchhandler', age: 6}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name="Yurie" age="4"/>
        <Person name="Max" age="6">My hobbies</Person>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandler} />
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler} />
      </div>

    );
  }
}

export default App;
