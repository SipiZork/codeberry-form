import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      password: ''
    }
  }

  changeHandler = (e) => {
    let inputName = e.target.name;
    let inputVal = e.target.value;
    this.setState({
      [inputName]: inputVal
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
    alert('We are submitting!');
    this.setState({
      fName: '',
      lName: '',
      email: '',
      password: '',
    });
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          <div className="form-input">
            <form onSubmit={this.submitHandler}>
              <h1>Form</h1>
              <label>
                First Name:
                <input type="text" name="fName" placeholder="Type here your first name" value={this.state.fName} onChange={this.changeHandler}/>
              </label>
              <br />
              <label>
                Last Name:
                <input type="text" name="lName" placeholder="Type here your last name" value={this.state.lName} onChange={this.changeHandler}/>
              </label>
              <br />
              <label>
                Email:
                <input type="text" name="email" placeholder="Type here your email address" value={this.state.email} onChange={this.changeHandler}/>
              </label>
              <br />
              <label>
                Password:
                <input type="text" name="password" placeholder="Type here your password" value={this.state.password} onChange={this.changeHandler}/>
              </label>
              <input type="submit" value="Press me" />
            </form>
          </div>
          <div className="form-output">
            <h1>Output</h1>
            <p>
              <strong>First Name:</strong> {this.state.fName}
            </p>
            <p>
              <strong>Last Name:</strong> {this.state.lName}
            </p>
            <p>
              <strong>Email:</strong> {this.state.email}
            </p>
            <p>
              <strong>Password:</strong> {this.state.password}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
