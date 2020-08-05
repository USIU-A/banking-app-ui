import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { loginUser } from "../store/epic/transactionsEpic";

const initialFormData = Object.freeze({
  email: "",
  password: "",
});

export default function Login(props) {
  let history = useHistory();
  let location = useLocation();

  const [formData, updateFormData] = React.useState(initialFormData);

  let { from } = location.state || { from: { pathname: "/" } };

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // ... submit to API
    const [apiCall, apiDispatch] = window.store.banking;
    loginUser(formData.email, formData.password, apiDispatch)
    .then((result) => {
      const [banking] = window.store.banking;

      if(banking.authUser && banking.authUser.isAuthenticated){
        history.push("/transaction");
      }else if(banking.authUser && !banking.authUser.isAuthenticated){
        alert(banking.authUser.message);
      }else{
        alert("Oops! Something went wrong. Please try again.");
      }
    });

  };

  const register = (e) => {
    history.push("/register");
  }

  return  (
    <form onSubmit={(event) => console.log(event)}>
      <h3>Sign In</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
        </div>
      </div>
      <button className="btn btn-primary btn-block" onClick={handleSubmit}>
        Submit
      </button>
      <p className="forgot-password text-right">
        Not registered? <a href="#" onClick={register}>Register here</a>
      </p>
    </form>
  );
}
