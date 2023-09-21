import React, { Component } from 'react'
import './App.css';

const tasks = [
  {
    id: 2,
    title: "Test",
    description: "testDesc"
  }
]


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted:false,
      taskList:tasks, // dummy data

    }
  }

  displayCompleted = status => {
    
    if(status){
      return this.setState({ viewCompleted: true })
    }
    else{ 
      return this.setState({ viewCompleted: false })
    }
  }

  render(){
    return(
      <h1>Hello world</h1>
    )
  }
}

export default App;
