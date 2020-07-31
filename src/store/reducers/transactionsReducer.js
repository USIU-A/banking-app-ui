import { useReducer} from 'react';
import {
USER_REGISTERED,
USER_LOGGEDIN,
BALANCE_REQUESTED,
DEPOSIT_REQUESTED,
WITHDRAW_REQUESTED,
TRANSACTION_VERIFIED
} from '../actions/transactionsCreator';
import { updateObject } from '../../utils/stateUpdater';

const initialState = {
    appUser: '',
    authUser: '',
    balanceTransaction: '',
    depositTransaction: '',
    withdrawTransaction: '',
    verifyTransaction: ''
  }

export function reducer(state = initialState, action) {
    updateObject(state, {

    });
    switch(action.type){
        case USER_REGISTERED:
            return {
                appUser: action.appUser
            }
        case USER_LOGGEDIN:
            return {
                authUser: action.authUser
            }
        case BALANCE_REQUESTED:
            return {
                balanceTransaction: action.balanceTransaction
            }
        case DEPOSIT_REQUESTED:
            return {
                depositTransaction: action.depositTransaction
            }
        case WITHDRAW_REQUESTED:
            return {
                withdrawTransaction: action.withdrawTransaction
            }
        case TRANSACTION_VERIFIED:
            return {
                verifyTransaction: action.verifyTransaction
            }
        default:
            return state;
    }
}

export default () => useReducer(reducer, initialState);