import * as React from "react";

export interface IButtonProps
{
    type : string,
    label: string,
    handleClick : (event: React.MouseEvent<HTMLButtonElement>) => void
}

export class Button extends React.Component<IButtonProps, {}> {
    render() {
        return(
            <input
                type="button"
                className={ this.props.type === 'action' ? 'button action-button' : 'button input-button' }
                onClick={ this.props.handleClick }
                value={ this.props.label }
            />
        )
    }
}