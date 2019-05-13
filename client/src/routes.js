import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './components/App';
import Calc from './components/Calc';
import Users from './components/Users';
import Page404 from './components/Page404';
import About from './components/About';

const AppRoutes = () => 
<App>
    <Switch>
        <Route exact path="/calc" component = {Calc} />
        <Route exact path="/users" component = {Users} />
        <Route exact path="/" component = {Calc} />
        <Route exact path="/about" component = {About} />
        <Route component = {Page404} />
    </Switch>
</App>

export default AppRoutes;