import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Auth from './app/views/auth/Auth';
import Home from './app/views/home/Home';
import FirstStep from './app/views/firstStep/FirstStep';
import Welcome from './app/views/welcome/Welcome';
import SecondStep from './app/views/secondStep/SecondStep';

const Routes = () =>  (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/onboarding" component={Welcome}/>
        <Route exact path="/onboarding/firstStep" component={FirstStep}/>
        <Route exact path="/onboarding/secondStep" component={SecondStep}/>
        <Route exact path="/main" component={() => <h1>Main</h1>}/>
    </Switch>
)

export default Routes
