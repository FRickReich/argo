import * as React from 'react';
import { object } from 'prop-types';

import IItem from '../interfaces/IItem';

export interface IProps
{
    entries: Array<IItem>,
    handleClick : (event: React.MouseEvent<HTMLLIElement>) => void
}

interface IState
{
    
}

export class TodoListItems extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    state: IState =
    {
        
    };

    createTasks(item : IItem)
    {
        return (
            <li
                onClick={ this.props.handleClick } 
                className={item.key.toString()}
                key={item.key}>{item.text}
            </li>
        );
    }

    public render() : JSX.Element
    {
        var todoEntries : Array<IItem> = this.props.entries;
        var listItems : Array<Object> = todoEntries.map(this.createTasks)
        return (
            <ul className="todolist-itemlist">
                {listItems}
            </ul>
        );
    }
}