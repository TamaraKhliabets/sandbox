import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';

render(
    <BrowserRouter>
        <App
        url='http://localhost:3001/api/wheels'
        pollInterval={ 2000 }
        />
    </BrowserRouter>
,document.getElementById('root'));