import * as React from 'react';

export interface IProps{}
export interface IState{}

export class Test extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
    }

    state: IState = {};

    public render(): JSX.Element
    {
        return (
            <h1>Test</h1>
        );
    }
}