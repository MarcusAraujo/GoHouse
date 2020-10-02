import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import UserCrud from '../components/user/UserCrud'
import CasaCrud from "../components/casas/CasasCrud"

export default props =>
<Switch>        
        <Route exact path="/users" component={UserCrud}/>
        <Route exact path="/casas" component={CasaCrud}/>
        <Route exact path="/adm"/>
        <Redirect from="/" to="/casas"/>
</Switch>