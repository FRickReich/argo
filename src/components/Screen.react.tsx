import * as React from "react";
import { ScreenRow } from './ScreenRow.react';

export interface IScreenProps
{
    question: string,
    answer: string
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Screen extends React.Component<IScreenProps, {}>
{
    render() {
        return(
            <div className="screen">
                <ScreenRow value={ this.props.question } />
                <ScreenRow value={ this.props.answer } />
            </div>
        )
    }
}