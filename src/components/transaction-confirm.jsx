import React, { Component } from 'react';

class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form>
            <h3>Confirm Transaction</h3>
    
            <div className="form-group">
              <label>Enter transaction authentication code</label>
              <input
                type="text"
                className="form-control"
                placeholder="XXXXXX"
              />
            </div>
    
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            {/* <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p> */}
          </form>
        );
    }
}
 
export default Confirmation;