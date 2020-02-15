import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Form extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="container">
          <div className="form-input">
            <form>
              <h1>Form</h1>
              <label>
                Name:
                <input type="text" name="name" />
                </label>
            </form>
          </div>
          <div className="form-output">
            <h1>Output</h1>
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
