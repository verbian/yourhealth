import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Card from './components/Card/Card';
import Navbar from './components/NavBar/NavBar';
import Article from './components/Article/Article';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Startup from './components/Startup/Startup';

const Routes = () => (
    <main>
        <Switch>
            <Route path='/startup' component={Startup} />
            <Route path='/article' component={Article} />
            <Route path='/navbar' component={Navbar} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/card' component={Card} />
        </Switch>
    </main>
)

export default Routes;