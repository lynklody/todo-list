import React, { Component } from 'react';
import Todo from "./Todo";
import { CardContent } from '@material-ui/core'

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const {todos, toggleTodo} = this.props;
        return (
            <CardContent>
            <ul>
                {
                    todos.map(todo => {
                    // return <li> {todo.text} </li>
                    return <Todo key={todo.id} {...todo} 
                        onClick={() => {toggleTodo(todo.id)}} />
                    })
                }
            </ul>
            </CardContent>
        );
    }
}

export default TodoList;