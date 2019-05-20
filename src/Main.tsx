import * as React from 'react';

import { App } from './App';
import { Frame } from './components/Frame.react';

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
                 <Frame />
            </>
        );
    }
}