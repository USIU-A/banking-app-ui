import {get, post} from './apiService';

const REGISTER_URL = 'http://localhost:5000/api/v1/banking/createaccount';

const LOGIN_URL = 'http://localhost:5000/api/v1/banking/login';

const BALANCE_URL = 'http://localhost:5000/api/v1/banking/getbalance';

const DEPOSIT_URL = 'http://localhost:5000/api/v1/banking/depositamount';

const WITHDRAW_URL = 'http://localhost:5000/api/v1/banking/withdrawamount';

const VERIFY_URL = 'http://localhost:5000/api/v1/banking/verify';


export function registerUser(firstName, lastName, email, password){
    const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    return post(REGISTER_URL, {}, JSON.stringify(userDetails));
}

export function login(email, password){
    const userDetails = {
        email: email,
        password: password
    }

    return post(LOGIN_URL,{}, JSON.stringify(userDetails));
}

export function checkBalance(token){
    return get(BALANCE_URL, {token});
}

export function deposit(transaction){
    const token = transaction.transactionToken;
    console.log(token);
    return post(DEPOSIT_URL, token, JSON.stringify(transaction))
}

export function withdraw(transaction){
    const token = transaction.transactionToken;
    return post(WITHDRAW_URL, token, JSON.stringify(transaction))
}

export function verify(transaction){
    const token = transaction.transactionToken;
    return post(VERIFY_URL, token, JSON.stringify(transaction))
}