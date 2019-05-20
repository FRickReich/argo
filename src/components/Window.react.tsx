import * as React from 'react';

export interface IWindowProps
{
    internal : string
}

export class Window extends React.Component<IWindowProps, {}>
{
    constructor(props: IWindowProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <>
                 <p>Hello world, {this.props.internal}...</p>
            </>
        );
    }
}