import React from 'react';
import MainPage from './MainPage';
import { BrowserRouter } from 'react-router-dom';

export default () => <BrowserRouter><MainPage url='http://localhost:3001/api/wheels' pollInterval={2000}/></BrowserRouter>
