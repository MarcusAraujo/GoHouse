import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import AdmCrud from '../components/user/AdmCrud'
import CasaCrud from "../components/casas/CasasCrud"

export default props =>
<Switch>        
        <Route exact path="/users" component={AdmCrud}/>
        <Route exact path="/casas" component={CasaCrud}/>        
        <Redirect from="/" to="/casas"/>
</Switch>