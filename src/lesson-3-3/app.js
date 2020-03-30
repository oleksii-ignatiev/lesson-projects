import React from 'react';

import { Header } from './components/header';
import { News } from './components/news';

export const App = () => {
    return (
        <>
            <h1>Application</h1>
            <Header />
            <News />
        </>
    );
};
