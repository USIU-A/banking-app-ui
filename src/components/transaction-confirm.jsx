import React, { Component } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import './transaction-confirm.css';

import { verifyTransaction } from "../store/epic/transactionsEpic";


const initialFormData = Object.freeze({
    code: ""
  });



export default function Confirmation () {

  const[banking] = window.store.banking;

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

    if(formData.code && formData.code.length > 0){
      const[banking] = window.store.banking;

      if(banking.withdrawTransaction){
        console.log(banking.withdrawTransaction);
        const [apiCall, apiDispatch] = window.store.banking;
  
        let transactionObj = {
          transactionToken: banking.withdrawTransaction.transactionToken,
          confirmationToken: formData.code,
          transactionType: banking.withdrawTransaction.transactionType,
          transactionAmount: banking.withdrawTransaction.transactionAmount,
          balanceAmount: 0.00,
          isValid: true,
          isPosted: false
          }
        verifyTransaction(transactionObj, apiDispatch).then((result) =>
        {
          const [banking] = window.store.banking;
          console.log(banking.withdrawTransaction);
          if(banking.verifyTransaction && banking.verifyTransaction.isPosted){
            alert("Transaction has been successfully posted");
            history.push('/transaction');
          }else{
            alert("Transaction was not posted");
          }
        });
      }
  
      if(banking.depositTransaction){
        console.log(banking.depositTransaction);
        const [apiCall, apiDispatch] = window.store.banking;
  
        let transactionObj = {
          transactionToken: banking.depositTransaction.transactionToken,
          confirmationToken: formData.code,
          transactionType: banking.depositTransaction.transactionType,
          transactionAmount: banking.depositTransaction.transactionAmount,
          balanceAmount: 0.00,
          isValid: true,
          isPosted: false
          }
        verifyTransaction(transactionObj, apiDispatch).then((result) =>
        {
          const [banking] = window.store.banking;
          console.log(banking.verifyTransaction);
          if(banking.verifyTransaction && banking.verifyTransaction.isPosted){
            alert("Transaction has been successfully posted");
            history.push('/transaction');
          }else{
            alert("Transaction was not posted");
          }
        });
      }
    }

   
    // ... submit to API
  };

    return ( 
        <form>
        <h3>Confirm Transaction</h3>

        <div className="form-group">
          <label className="code-label">Enter transaction authentication code</label>
          <input
            type="text"
            name="code"
            maxLength="6"
            className="form-control code-input"
            placeholder="XXXXXX"
            onChange={handleChange}
          />
        </div>

        <button 
        type="submit" 
        className="btn btn-primary btn-block code-button"
        onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
}