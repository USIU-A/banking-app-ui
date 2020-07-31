import banking from './reducers/transactionsReducer';

export default function createStore() {
    return {
        banking: banking()
    }
}