import { connnect } from 'redux'
import TodoList from '../component/TodoList'
import toggleTodo from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos
        case 'completed':
            return todos.filter(t => t.completed)
        case 'active':
            return todos.filter(t => !t.completed)
        default:
            return new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = () => ({
    toggleTodo: id => dispatchEvent(toggleTodo(id))
})

export default connnect(mapStateToProps,
    mapDispatchToProps)(TodoList)