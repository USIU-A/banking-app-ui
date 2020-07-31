export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_LOGGEDIN = 'USER_LOGGEDIN';
export const BALANCE_REQUESTED = 'BALANCE_REQUESTED';
export const DEPOSIT_REQUESTED = 'DEPOSIT_REQUESTED';
export const WITHDRAW_REQUESTED = 'WITHDRAW_REQUESTED';
export const TRANSACTION_VERIFIED = 'TRANSACTION_CONFIRMED';

export function userRegistered(appUser){
    return{
        type: USER_REGISTERED,
        appUser
    }
}

export function userLoggedIn(authUser){
    return{
        type: USER_LOGGEDIN,
        authUser
    }
}

export function balanceRequested(balanceTransaction){
    return{
        type: BALANCE_REQUESTED,
        balanceTransaction
    }
}

export function depositRequested(depositTransaction){
    return{
        type: DEPOSIT_REQUESTED,
        depositTransaction
    }
}

export function withdrawRequested(withdrawTransaction){
    return{
        type: WITHDRAW_REQUESTED,
        withdrawTransaction
    }
}

export function transactionVerified(verifyTransaction){
    return{
        type: TRANSACTION_VERIFIED,
        verifyTransaction
    }
}