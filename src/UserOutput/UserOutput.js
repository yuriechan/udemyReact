import React from 'react';

const userOutput = (props) => {
  return (
    <div style={props.style}>
      <p>Hi, my name is {props.userName}</p>
      <p>I am learning react.js.</p>
    </div>
  )
}

export default userOutput;




















































// import React from 'react';
//
// const UserOutput = (props) => {
//   return (
//     <div onClick={props.clicked}>
//       <p>Hello, My name is {props.name}.</p>
//       <p>I am from {props.country}</p>
//     </div>
//   )
// }
//
// export default UserOutput;
