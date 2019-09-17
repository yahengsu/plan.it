import React from 'react'
import { BrowserRouter, Switch, Router, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;