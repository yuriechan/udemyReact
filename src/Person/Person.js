import React from 'react';
import './Person.css';


// const person = () => {
//   return <p>I am a Person, and {Math.floor(Math.random() * 30)} years old.</p>
// }

const person = (props) => {
    return (
      <div onClick={props.click}>
        <p>I am {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
      </div>
    )
};


export default person;
