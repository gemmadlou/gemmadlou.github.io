import React from 'react';
import ReactDOM from 'react-dom';
import domready from 'domready';
import { App } from './components/app.jsx';

domready(() => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );    
});