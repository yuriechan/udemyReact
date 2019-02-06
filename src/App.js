import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './UserInput/UserInput.css'


class App extends Component {
  state = {
    userName: 'Yurie'
  }

  changeNameHandler = (event) => {
    this.setState({userName: event.target.value})
  }

  render(){
    const style = {
      backgroundColor : 'blue'
    }

    return(
      <div className="App">
        <UserOutput
        userName={this.state.userName}
        style={style} />

        <UserInput
        changed={this.changeNameHandler}
        value={this.state.userName}/>
      </div>
    )
  }
}

export default App;


//
// import './UserInput/UserInput.css';
// import UserOutput from './UserOutput/UserOutput';
// import UserInput from './UserInput/UserInput';
  //
  // state = {
  //   name: 'YURIE',
  //   country: 'JAPAN'
  // }
  //
  // changeNameHandler = () => {
  //   this.setState({
  //     name: '____YURIE____CHANGED',
  //     country: '_____JAPAN_____CHANGED'
  //   })
  // }
  //
  // overWriteHandler = (event) => {
  //   this.setState({
  //     name: event.target.value,
  //     country: 'Japan'
  //   })
  // }
  //
  // render() {
  //
  //   const style = {
  //     border: '1px solid blue',
  //     color: 'red'
  //   }
  //
  //   return (
  //     <div className="App">
  //       <UserOutput
  //       style={style}
  //       clicked={this.changeNameHandler}
  //       name={this.state.name}
  //       country={this.state.country}
  //       />
  //       <UserInput
  //       changed={this.overWriteHandler}
  //       name={this.state.name}/>
  //     </div>
  //   );
  // }
