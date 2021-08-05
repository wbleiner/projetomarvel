import './Content.css'
import { Switch, Route } from 'react-router-dom';
import React from 'react'
import Home from './../../Views/Home';

const Content = props => {
    return (
        <div className="Content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/shoppingcart">

                </Route>
            </Switch>
        </div>
    )
}
export default Content