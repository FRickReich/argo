import * as React from 'react';

import { Screen } from './Screen.react';
import { Button } from './Button.react';

export interface IFrameProps
{
    
}

interface IFrameState
{
    question: string,
    answer: string
}

export class Frame extends React.Component<IFrameProps, IFrameState>
{
    constructor(props: IFrameProps)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    state: IFrameState =
    {
        question: '',
        answer: ''
    };

    handleClick(event: React.MouseEvent<HTMLButtonElement>)
    {
        const value = event.currentTarget.value;

        switch (value)
        {
            case '=':
            {
                const answer = eval(this.state.question).toString();
            
                this.setState({
                    answer
                });
                
                break;
            }
            case 'C':
            {
                this.setState({
                    question: '',
                    answer: ''
                });
                    
                break;
            }
            default:
            {
                this.setState({
                    question: this.state.question += value
                })
                    
                break;
            }
        }
    }

    public render(): JSX.Element
    {
        return (
            <div className="frame">
                <div className="calculator-title">
                    TEST
                </div>

                <Screen question={this.state.question} answer={this.state.answer} />

                <div className="button-row">
                    <Button label={'1'} handleClick={this.handleClick} type='input' />
                    <Button label={'2'} handleClick={this.handleClick} type='input' />
                    <Button label={'3'} handleClick={this.handleClick} type='input' />
                    <Button label={'4'} handleClick={this.handleClick} type='input' />
                    <Button label={'-'} handleClick={this.handleClick} type='action' />
                    <Button label={'+'} handleClick={this.handleClick} type='action' />
                </div>

                <div className="button-row">
                    <Button label={'5'} handleClick={this.handleClick} type='input' />
                    <Button label={'6'} handleClick={this.handleClick} type='input' />
                    <Button label={'7'} handleClick={this.handleClick} type='input' />
                    <Button label={'8'} handleClick={this.handleClick} type='input' />
                    <Button label={'*'} handleClick={this.handleClick} type='action' />
                    <Button label={'/'} handleClick={this.handleClick} type='action' />
                </div>
                
                <div className="button-row">
                    <Button label={'9'} handleClick={this.handleClick} type='input' />
                    <Button label={'.'} handleClick={this.handleClick} type='input' />
                    <Button label={'0'} handleClick={this.handleClick} type='input' />
                    <Button label={'C'} handleClick={this.handleClick} type='action' />
                    <Button label={'='} handleClick={this.handleClick} type='action' />
                </div>
            </div>
        );
    }
}