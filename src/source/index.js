import React from 'react';

import { Header } from './bus/header';
import { TasksList } from './bus/tasklist';
import { SingleTask } from './bus/singletask';
import { Footer } from './bus/footer';

import './styles/index.scss';

export const Source = () => {
    return (
        <>
            <main>
                <Header />
                <div className="wrap">
                    <TasksList />
                    <SingleTask />
                </div>
            </main>
            <Footer />
        </>
    )
};
