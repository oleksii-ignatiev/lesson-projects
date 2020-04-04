// Core
import React from 'react';
import { Router } from 'react-router-dom';

// Routes
import { Routes } from './navigation';

// Other
import { history } from './navigation/history';

export const App = () => {
    return (
        <Router history={ history }>
            <Routes />
        </Router>
    );
};
