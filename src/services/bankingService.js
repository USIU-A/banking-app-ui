import {get, post} from './apiService';

const REGISTER_URL = '';

const LOGIN_URL = '';

const BALANCE_URL = '';

const DEPOSIT_URL = '';

const WITHDRAW_URL = '';

const VERIFY_URL = '';


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

export function deposit(token, amount){
    const transactionDetail = {
        transactionToken: token,
        transactionType: "Deposit",
        transactionAmount: amount
    }

    return post(DEPOSIT_URL, token, JSON.stringify(transactionDetail))
}

export function withdraw(token, amount){
    const transactionDetail = {
        transactionToken: token,
        transactionType: "Withdraw",
        transactionAmount: amount
    }

    return post(WITHDRAW_URL, token, JSON.stringify(transactionDetail))
}

export function verify(token, code){
    const transactionDetail ={
        transactionToken: token,
        confirmationToken: code
    }

    return post(VERIFY_URL, token, JSON.stringify(transactionDetail))
}