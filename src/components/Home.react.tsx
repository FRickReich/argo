import * as React from 'react';

export interface IFrameProps
{
    
}

interface IFrameState
{
    question: string,
    answer: string
}

export class Home extends React.Component<IFrameProps, IFrameState>
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
    }

    public render(): JSX.Element
    {
        return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <div>
                <h1>Home</h1>
=======
            <div className="frame">
                test
                {/*<Button label={'1'} handleClick={this.handleClick} type='input' />*/}
>>>>>>> parent of e488518... Added router.
=======
            <div className="frame">
                test
                {/*<Button label={'1'} handleClick={this.handleClick} type='input' />*/}
>>>>>>> parent of e488518... Added router.
=======
            <div className="frame">
                test
                {/*<Button label={'1'} handleClick={this.handleClick} type='input' />*/}
>>>>>>> parent of e488518... Added router.
            </div>
        );
    }
}