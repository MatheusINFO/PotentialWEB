import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ListDeveloper } from '../pages'
import { AddDeveloper } from '../pages'
import { DeleteDeveloper } from '../pages'
import { EditDeveloper } from '../pages'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ListDeveloper}/>
        <Route exact path="/add" component={AddDeveloper}/>
        <Route exact path="/del" component={DeleteDeveloper}/>
        <Route exact path="/edit" component={EditDeveloper}/>
        <Route path="/" component={ListDeveloper}/>
    </Switch>
)

export default Routes