import * as React from 'react';
import ReactDOM from 'react-dom'

import { App } from './App';

import { Home } from './components/Home.react';

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

    public render(): JSX.Element
    {
        return (
            <>
                <Home />
            </>
        );
    }
}