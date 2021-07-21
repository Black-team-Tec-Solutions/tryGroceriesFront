import React from 'react';
import {Switch,Route} from 'react-router-dom';
//import {Home,Auth} from './app/views'
//import Admin from './app/views/admin/Admin';

const SubRoutes = () =>  (
    <Switch>
        <Route  path="/main/diet" component={() => <h1>Dieta</h1>} />
        <Route  path="/main/groceriesList" component={() => <h1>lista</h1>} />
        <Route  path="/main/Stock" component={() => <h1>stock</h1>} />
    </Switch>
)

export default SubRoutes