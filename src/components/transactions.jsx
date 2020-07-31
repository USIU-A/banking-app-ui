import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./transactions.css";

import TransactionSelector from "./transactionSelector/transaction-selector";


const initialFormData = Object.freeze({
    type:"",
    amount: ""
  });

export default function Transactions() {

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
    history.push('/verify');
    // ... submit to API
  };

  return (
    <form
    // onSubmit = {this.g=this.handleSubmit()}
    >
      <h3>Transactions</h3>
      <TransactionSelector
        name="type"
        choices={["Deposit", "Withdraw"]}
        default="Deposit"
        onChange={(transactionType) => console.log(transactionType)}
      />
      <div className="form-group">
        <label>Amount</label>
        <input
          type="text"
          name="amount"
          className="form-control"
          placeholder="Enter Transaction Amount"
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block transaction-button"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <div className="balance">
        <h3>Balance: 0.00</h3>
      </div>
    </form>
  );
}
