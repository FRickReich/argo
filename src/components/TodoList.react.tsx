import * as React from 'react';
import { object } from 'prop-types';

import { TodoListItems } from './TodoListItems.react';

import IItem from '../interfaces/IItem';

export interface IProps
{
    
}

interface IState
{
    items: Array<IItem>
}

export class TodoList extends React.Component<IProps, IState>
{
    private newTask: React.RefObject<HTMLInputElement>;

    constructor(props: IProps)
    {
        super(props);

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.newTask = React.createRef();
    }

    state: IState =
    {
        items: []
    }; 

    addItem(event: React.FormEvent<HTMLFormElement>)
    {
        if (this.newTask.current.value !== "")
        {
            var newItem: IItem =
            {
                text: this.newTask.current.value,
                key: Date.now()
            };

            this.setState((prevState) =>
            {
                return {
                    items: prevState.items.concat(newItem)
                }
            })

            this.newTask.current.value = "";
        }

        console.log(this.state.items);

        event.preventDefault();
    };

    deleteItem(event: React.FormEvent<HTMLLIElement>)
    {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key.toString() !== event.currentTarget.className);
        });
      
        this.setState({
            items: filteredItems
        });

        event.preventDefault();
      }

    public render(): JSX.Element
    {
        return (
            <div className="todolist-main">
                <div className="todolist-header">
                    <form onSubmit={ this.addItem }>
                        <input ref={ this.newTask } placeholder="Enter task...">
                        </input>
                        <button type="submit">add</button  >
                    </form>
                </ div>
                <TodoListItems
                    entries={ this.state.items }
                    handleClick={ this.deleteItem }
                />
            </div>
        );
    }
}