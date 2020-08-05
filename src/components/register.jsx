import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { registerUser } from "../store/epic/transactionsEpic";

const initialFormData = Object.freeze({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

export default function Register (props) {

    let history = useHistory();

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim(),
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const [apiCall, apiDispatch] = window.store.banking;
        registerUser(formData.firstName, formData.lastName, formData.email, formData.password, apiDispatch)
        .then((result) => {
          const [banking] = window.store.banking;
          if(banking.appUser && banking.appUser.isSuccessfull){
            alert(banking.appUser.message);
            history.push("/sign-in");
          }else if(banking.appUser && !banking.appUser.isSuccessfull){
            alert(banking.appUser.message);
          }else{
            alert("Oops! Something went wrong. Please try again.");
          }
        });
      };

      const refreshApp = () => {
        window.location.reload(false);
      }

      const handleClick = (e) => {
        history.push("/sign-in");
        window.location.reload(false);
      };
    
    return (
        <form>
          <h3>Sign Up</h3>
  
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First name"
              onChange={handleChange}
            />
          </div>
  
          <div name="lastName" className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
  
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
  
          <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="#" onClick={handleClick}>sign in?</a>
          </p>
        </form>
      );
}
