import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
state = {
  persons: [
    {name: 'amy', age: 28},
    {name: 'alex', age: 29},
    {name: 'stephanie', age:30}
  ]
}

switchNameHandler = (newName) => {
  console.log('was clicked');
  // DONT DO THIS: this.state.persons[0].name = 'new name'. React do not mutate directly.
  this.setState({
  persons: [
    {name: newName, age: 2800},
    {name: 'ALEX', age: 2900},
    {name: 'STEPHANIE', age:3000}
  ]})
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name: event.target.value, age: 1},
      {name: 'ALEX CHANGED NAME', age: 2},
      {name: 'STEPHANIE CHANGED NAME', age:3}
    ]}
  )
}

  render() {
    //inline style
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
        cursor: 'pointer'
    };

    return (
      <div className = 'App'>
      <h1>hey</h1>
      <button
      style = {style}
      onClick = {this.switchNameHandler.bind(this, 'AMY')}>Switch Name!</button>
      <div>
      <Person
      name = {this.state.persons[0].name}
      age = {this.state.persons[0].age}
      changed = {this.nameChangedHandler} />
      <Person
      name = {this.state.persons[1].name}
      age = {this.state.persons[1].age}
      click = {this.switchNameHandler}>My hobbies: tennis</Person>
      <Person
      name = {this.state.persons[2].name}
      age = {this.state.persons[2].age}/>
      </div>
      </div>

      //React.createElement('div',{className: 'App'},React.createElement('h1',null,'HELLO'))
    );
  }
}

export default App;
