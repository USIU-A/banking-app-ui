import React, { Component, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./transactions.css";

import { depositRequest, withdrawRequest } from "../store/epic/transactionsEpic";

import TransactionSelector from "./transactionSelector/transaction-selector";


const initialFormData = Object.freeze({
  transactionToken: '',
  confirmationToken: '',
  transactionType: 0,
  transactionAmount: 0.00,
  balanceAmount: 0.00,
  isValid: false,
  isPosted: false
  });


  let transactionClass = 0;

export default function Transactions(props) {

  const[banking] = window.store.banking;

  console.log(banking.authUser);

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
    const[banking] = window.store.banking;

    console.log(banking.authUser);
    let transactionObj = {
      transactionToken: banking.authUser.token,
      confirmationToken: '',
      transactionType: transactionClass,
      transactionAmount: formData.amount,
      balanceAmount: 0.00,
      isValid: false,
      isPosted: false
      }

    console.log(transactionObj);

    const [apiCall, apiDispatch] = window.store.banking;
    if(transactionClass === 1){
      depositRequest(transactionObj, apiDispatch).then((result) =>
      {
        console.log(transactionObj);
        const [banking] = window.store.banking;
        console.log(banking.depositTransaction);
        if(banking.depositTransaction && banking.depositTransaction.isValid){
          alert("Please check your email for verification code");
          history.push('/verify');
        }
      });
    }else if (transactionClass === 2){
      withdrawRequest(transactionObj, apiDispatch).then((result) =>
      {
        const [banking] = window.store.banking;
        alert("Please check your email for verification code");
        console.log(banking.withdrawTransaction);
        if(banking.withdrawTransaction && banking.withdrawTransaction.isValid){
          history.push('/verify');
        }
      });
    }
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
        onChange={(transactionType) => transactionClass  = transactionType.id }
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
