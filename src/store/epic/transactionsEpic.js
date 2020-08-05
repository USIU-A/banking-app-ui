import * as bankingService from '../../services/bankingService';
import {userRegistered, userLoggedIn, balanceRequested, depositRequested, withdrawRequested, transactionVerified} from '../actions/transactionsCreator';

export function registerUser(firstName, lastName, email, password, dispatch) {
    return bankingService.registerUser(firstName, lastName, email, password).then((result) => {
        dispatch(userRegistered(result));
    });
}

export function loginUser(email, password, dispatch) {
    return bankingService.login(email, password).then((result) => {
        dispatch(userLoggedIn(result));
    });
}

export function requestBalance(token, dispatch) {
    return bankingService.checkBalance(token).then((result) => {
        dispatch(balanceRequested(result));
    });
}

export function depositRequest(transaction, dispatch) {
    return bankingService.deposit(transaction).then((result) => {
        dispatch(depositRequested(result));
    });
}

export function withdrawRequest(transaction, dispatch) {
    return bankingService.withdraw(transaction).then((result) => {
        dispatch(withdrawRequested(result));
    });
}

export function verifyTransaction(transaction, dispatch) {
    return bankingService.verify(transaction).then((result) => {
        dispatch(transactionVerified(result));
    });
}