// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import { book } from './book';

// Pages
import { Home } from '../pages/home';
import { Contacts } from '../pages/contacts';

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
    </Switch>
  </>
)