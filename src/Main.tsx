import * as React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import ReactDOM from 'react-dom'
=======
>>>>>>> parent of e488518... Added router.
=======
>>>>>>> parent of e488518... Added router.
=======
>>>>>>> parent of e488518... Added router.

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <Home />
=======
                 <Home />
>>>>>>> parent of e488518... Added router.
=======
                 <Home />
>>>>>>> parent of e488518... Added router.
=======
                 <Home />
>>>>>>> parent of e488518... Added router.
            </>
        );
    }
}