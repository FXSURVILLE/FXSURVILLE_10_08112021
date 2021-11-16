import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import User from '../pages/user'
import SignIn from '../pages/sign-in'
import Error from '../pages/Error.js'



class Router extends React.Component {

    render(){
        const routes = [
            {
                path: "/",
                component : Home,
                exact: true
            },
            {
                path: "/profile",
                component : User
            },
            {
                path: "/sign-in",
                component : SignIn ,
                exact : true
            },
            {
                path: "*",
                component : Error ,
            },
        ]

        return(
            <Switch>
                {routes.map((route)=> (
                     <Route key={route.path} {...route} />
                ))}
            </Switch>
        )
    }

}

export default Router