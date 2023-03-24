import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initializeApp } from 'firebase/app';
// import { connectAuthEmulator, getAuth } from 'firebase/auth';
// import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
// import { connectStorageEmulator, getStorage } from 'firebase/storage';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { App } from './App';

initializeApp({
    apiKey: 'AIzaSyB6Vok-G0JozLpVPNT75DYx-qg32qfHou0',
    authDomain: 'family-feud-37f28.firebaseapp.com',
    databaseURL:
        'https://family-feud-37f28-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'family-feud-37f28',
    storageBucket: 'family-feud-37f28.appspot.com',
    messagingSenderId: '187037567780',
    appId: '1:187037567780:web:292016cb71082f506741b1',
    measurementId: 'G-Z5TK4X8NS9'
});

// if (window.location.hostname === 'localhost') {
//     connectAuthEmulator(getAuth(), 'http://localhost:9099');
//     connectDatabaseEmulator(getDatabase(), 'localhost', 9000);
//     connectStorageEmulator(getStorage(), 'localhost', 9199);
// }

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
