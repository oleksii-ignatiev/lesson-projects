import React, { useState } from 'react';
import  {useCard} from './bus/tasklist/hooks/useCard';

import { Header } from './bus/header';
import { TasksList } from './bus/tasklist';
import { SingleTask } from './bus/singletask';
import { Footer } from './bus/footer';

import './styles/index.scss';

export const Source = () => {
    const {isCardVisible, openCard, closeCard} = useCard();
    const [newTask, setNewTask] = useState(false);
    const [currentTask, fillCurrentTask] = useState({});
    
    return (
        <>
            <main>
                <Header 
                    newTask = { newTask } 
                    openCard = { openCard } 
                />
                <div className="wrap">
                
                    <TasksList 
                        newTask = { newTask }
                        fillCurrentTask = { fillCurrentTask }
                        isCardVisible = { isCardVisible } 
                        openCard = { openCard } 
                        closeCard = { closeCard }
                    />
                    { isCardVisible && 
                        <SingleTask 
                            currentTask = { currentTask }
                            
                            isCardVisible = { isCardVisible } 
                            openCard = { openCard } 
                            closeCard = { closeCard } 
                            setNewTask = { setNewTask }
                        /> }
                </div>
            </main>
            <Footer />
        </>
    )
};