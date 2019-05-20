import * as React from "react";

export interface IScreenRowProps
{
    value : string
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class ScreenRow extends React.Component<IScreenRowProps, {}> {
    render() {
        return(
            <div className="screen-row">
                <input type="text" readOnly value={this.props.value} />
            </div>
        )
    }
}