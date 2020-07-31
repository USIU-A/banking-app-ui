import React, { Component } from 'react';
import { useHistory, useLocation } from "react-router-dom";


const initialFormData = Object.freeze({
    code: ""
  });



export default function Confirmation () {

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
    console.log(formData);
    history.push('/transaction');
    // ... submit to API
  };

    return ( 
        <form>
        <h3>Confirm Transaction</h3>

        <div className="form-group">
          <label>Enter transaction authentication code</label>
          <input
            type="text"
            name="code"
            className="form-control"
            placeholder="XXXXXX"
            onChange={handleChange}
          />
        </div>

        <button 
        type="submit" 
        className="btn btn-primary btn-block"
        onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
}