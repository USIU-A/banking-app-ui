import * as bankingService from '../../services/bankingService';
import {userRegistered, userLoggedIn, balanceRequested, depositRequested, withdrawRequested, transactionVerified} from '../actions/transactionsCreator';

export function registerUser(firstName, lastName, email, password) {
    return bankingService.registerUser(firstName, lastName, email, password).then((result) => {
        dispatch(userRegistered(result));
    });
}

export function loginUser(email, password) {
    return bankingService.loginUser(email, password).then((result) => {
        dispatch(userLoggedIn(result));
    });
}

export function requestBalance(token) {
    return bankingService.requestBalance(token).then((result) => {
        dispatch(balanceRequested(result));
    });
}

export function depositRequest(token, amount) {
    return bankingService.deposit(token, amount).then((result) => {
        dispatch(depositRequested(result));
    });
}

export function withdrawRequest(token, amount) {
    return bankingService.withdraw(token, amount).then((result) => {
        dispatch(withdrawRequested(result));
    });
}

export function verifyTransaction(token, code) {
    return bankingService.verify(token, amount).then((result) => {
        dispatch(transactionVerified(result));
    });
}