import * as React from 'react';

export interface IProps{}
export interface IState{}

export class Home extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
    }

    state: IState = {};

    public render(): JSX.Element
    {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}