import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Auth from './app/views/auth/Auth';
import Home from './app/views/home/Home';
import FirstStep from './app/views/firstStep/FirstStep';
import Welcome from './app/views/welcome/Welcome';
import SecondStep from './app/views/secondStep/SecondStep';
import { HitCardio, Routine, TrenInferior, TrenSuperior, Workout } from './app/components';

const Routes = () =>  (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/onboarding" component={Welcome}/>
        <Route exact path="/onboarding/firstStep" component={FirstStep}/>
        <Route exact path="/onboarding/secondStep" component={SecondStep}/>
        <Route exact path="/main" component={() => <h1>Pagina principal</h1>}/>
        <Route exact path="/workout" component={Workout}/>
            <Route exact path="/workout/routine" component={Routine}/>
            <Route exact path="/workout/superior" component={TrenSuperior}/>
            <Route exact path="/workout/inferior" component={TrenInferior}/>
            <Route exact path="/workout/cardio" component={HitCardio}/>
    </Switch>
)

export default Routes
