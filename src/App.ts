import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import { Main } from './Main';

export class App
{
    constructor()
    {
        this.render();
    }

    private render() : void
    {
        ReactDOM.render(React.createElement(Main, { app: this }), document.getElementById("app"));
    }
}

new App();