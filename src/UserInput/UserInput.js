import React from 'react';

const userInput = (props) => {
  return (
    <input className="UserInput" type="text" onChange={props.changed} value={props.value}/>
  )
}

export default userInput;
















































// import React from 'react';
// import './UserInput.css'
//
// const UserInput = (props) => {
//   return (
//     <div className="UserInput">
//       <input type="text"
//       onChange={props.changed}
//       value={props.name}/>
//     </div>
//   )
// }
//
// export default UserInput;
