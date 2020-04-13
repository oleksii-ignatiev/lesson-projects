// Core
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Routes
import { book } from './book';

// Pages
import { Home } from '../pages/home';
import { Contacts } from '../pages/contacts';
import { Secret } from '../pages/secret';
import { RegistrationForm } from '../pages/registration';
import { Profile } from '../pages/student';
import { Posts } from '../pages/posts';
import { Post } from '../pages/post';

// Hooks
import { useStudent } from '../bus/student/hooks/useStudent';


// Components
export const Routes = () => {
    const { user } = useStudent();
    
    return (
        <>
            <Switch>
                <Route exact path={ book.root }>
                    <Home />
                </Route>
                <Route exact path={ book.contacts }>
                    <Contacts />
                </Route>
                <Route exact path={ book.secret }>
                    <Secret />
                </Route>
                <Route exact path={ book.registration }>
                    { (user.firstName === '') ? <RegistrationForm />  : <Redirect to={ book.student } /> }
                </Route>
                <Route exact path={ book.student }>
                    <Profile />
                </Route>
                <Route exact path={ book.posts }>
                    <Posts />
                </Route>
                <Route exact path={ book.post }>
                    <Post />
                </Route>
            </Switch>
        </>
    )
}