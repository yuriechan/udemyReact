import React from 'react';

const UserOutput = (props) => {
  return (
    <div onClick={props.clicked}>
      <p>Hello, My name is {props.name}.</p>
      <p>I am from {props.country}</p>
    </div>
  )
}

export default UserOutput;
