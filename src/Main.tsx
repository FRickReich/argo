import * as React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import { App } from './App';

import { Home } from './components/Home.react';
import { List } from './components/List.react';
import { Test } from './components/Test.react';
import { NotFound } from './components/NotFound';

import './style.css';

export interface IMainProps
{
    app : App;
}

export class Main extends React.Component<IMainProps, {}>
{
    constructor(props: IMainProps)
    {
        super(props);
    }

    routing = (
        <Router >
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/Test">Test</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/list/:id" component={ List} />
                    <Route path="/Test" component={ Test } />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        </Router>
    );

    public render(): JSX.Element
    {
        return (
            <>
                { this.routing }
            </>
        );
    }
}