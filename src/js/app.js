import React from 'react';
import ReactDOM from 'react-dom';
import domready from 'domready';
import {
    App
} from './components/app.jsx';

domready(() => {
    ReactDOM.render( <
        App / > ,
        document.getElementById('app')
    );
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}