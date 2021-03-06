// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import { book } from './book';

// Pages
import { Home } from '../pages/home';
import { Contacts } from '../pages/contacts';
import { Secret } from '../pages/secret';
import { RegistrationForm } from '../pages/registration';
import { Profile } from '../pages/student';

// Components


export const Routes = () => (
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
            <RegistrationForm />
        </Route>
        <Route exact path={ book.student }>
            <Profile />
        </Route>
    </Switch>
  </>
)