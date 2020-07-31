import React, { Component } from 'react';

import TransactionSelector from './transactionSelector/transaction-selector';


class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    selectTransaction(transactionType){
        console.log(transactionType);
    }

    handleSubmit(){
        console.log("Submitted");
    }

    render() { 
        return ( 
            <form
            onSubmit = {this.g=this.handleSubmit()}
            >
            <h3>Transactions</h3>
            <TransactionSelector
              choices={["Balance", "Deposit", "Withdraw"]}
              default="Balance"
              onChange={(transactionType) => this.selectTransaction(transactionType)}
            />
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Transaction Amount"
              />
            </div>
    
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        );
    }
}
 
export default Transactions;