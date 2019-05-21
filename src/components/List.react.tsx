import * as React from 'react';

export interface IProps
{
    
}
export interface IState
{
    
}

export class List extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
    }

    state: IState = {};

    public render(): JSX.Element
    {
        console.log(this.props);
        return (
            <h1>List</h1>
        );
    }
}