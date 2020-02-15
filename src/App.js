import React from 'react';
import Form from './Form.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      password: ''
    };
  }

  updateState = (name, value) => {
    this.setState({
      [name]: value
    });
  }

  clearState = () => {
    this.setState({
      fName: '',
      lName: '',
      email: '',
      password: ''
    });
  }

  render(){
    return (
      <Form
        fName = {this.state.fName}
        lName = {this.state.lName}
        email = {this.state.email}
        password = {this.state.password}
        updateState = {this.updateState}
        clearState = {this.clearState}
      />
    );
  }
}

export default App;
