import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './components/App';
import Calc from './components/Calc';
import Page404 from './components/Page404';
import About from './components/About';

const AppRoutes = () => 
<App>
    <Switch>
        <Route exact path="/calc" component = {Calc} />
        <Route exact path="/" component = {Calc} />
        <Route exact path="/app" component = {App} />
        <Route exact path="/about" component = {About} />
        <Route component = {Page404} />
    </Switch>
</App>

export default AppRoutes;