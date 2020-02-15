import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props){
    super(props);
  }
  changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.props.updateState(name, value);
  }

  submitHandler = (e) => {
    e.preventDefault();
    alert('We are submitting!');
    this.props.clearState();
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
                <input type="text" name="fName" placeholder="Type here your first name" value={this.props.fName} onChange={this.changeHandler}/>
              </label>
              <br />
              <label>
                Last Name:
                <input type="text" name="lName" placeholder="Type here your last name" value={this.props.lName} onChange={this.changeHandler}/>
              </label>
              <br />
              <label>
                Email:
                <input type="text" name="email" placeholder="Type here your email address" value={this.props.email} onChange={this.changeHandler}/>
              </label>
              <br />
              <label>
                Password:
                <input type="text" name="password" placeholder="Type here your password" value={this.props.password} onChange={this.changeHandler}/>
              </label>
              <input type="submit" value="Press me" />
            </form>
          </div>
          <div className="form-output">
            <h1>Output</h1>
            <p>
              <strong>First Name:</strong> {this.props.fName}
            </p>
            <p>
              <strong>Last Name:</strong> {this.props.lName}
            </p>
            <p>
              <strong>Email:</strong> {this.props.email}
            </p>
            <p>
              <strong>Password:</strong> {this.props.password}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
