import * as React from 'react';

export interface IProps{}
export interface IState{}

export class NotFound extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
    }

    state: IState = {};

    public render(): JSX.Element
    {
        return <h1>404 NOT FOUND</h1>
    }
}