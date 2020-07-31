import React from 'react';
import store from '../store/store';
import App from '../App';

export default function AppContainer() {
    window.store = store();
    return (
        <App/>
    );
}