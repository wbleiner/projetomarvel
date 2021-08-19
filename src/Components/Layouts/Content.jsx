import './Content.css'
import { Switch, Route } from 'react-router-dom';
import React from 'react'
import Home from '../../Views/Home';
import Character from '../../Views/Character';
import Teste from '../../Views/Teste';

const Content = props => (
    <main className="Content">
        <Switch>
            
            <Route path="/character/:id">
                <Character />
            </Route>
            <Route exact path="/:id">
                <Teste/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            
        </Switch>
    </main>
)

export default Content