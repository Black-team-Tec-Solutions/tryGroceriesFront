import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {Home,Auth} from './app/views'
//import Main from './app/views/main/Main'

const Routes = () =>  (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/onboarding" component={() => <h1>Welcome</h1>}/>
        <Route exact path="/onboarding/firstStep" component={() => <h1>firstStep</h1>}/>
        <Route exact path="/onboarding/secondStep" component={() => <h1>secondStep</h1>}/>
        <Route exact path="/main" component={() => <h1>Main</h1>}/>
    </Switch>
)

export default Routes
