import React from 'react'
import Home from './pages/Home'
import { Route, Switch } from "react-router"
import Login from './pages/Login'

const routes = () => {
    return (

        <Switch>
            <Route path = "/login" exact>
                <Login/>
            </Route>

            <Route path = "/" exact>
                <Home/>
            </Route>
        </Switch>

        
    )
}

export default routes
