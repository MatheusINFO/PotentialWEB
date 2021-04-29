import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard } from '@/pages'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/" component={Dashboard}/>
    </Switch>
)

export default Routes