import React, { Component } from 'react';
// import AddTodo from "./component/AddTodo";
// import TodoList from "./component/TodoList";
// import Footer from "./component/Footer";
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FooterContainer from '../containers/FooterContainer'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Card, CardContent } from '@material-ui/core'
import Favorite from '@material-ui/icons/Favorite';
import red from '@material-ui/core/colors/red'

// const todos = [
//     {
//         id: 1,
//         text: "Walk the dogs",
//         completed: true
//     },
//     {
//         id: 2,
//         text: "Buy grocery",
//         completed: false
//     },
//     {
//         id: 3,
//         text: "Cook dinner",
//         completed: true
//     },
// ]

// const filter = "all";

const redheart = red;

const useStyles = makeStyles( () => ({
    card: {
        marginTop: 40,
        // borderRadius: spacing(0.5),
        transition: '0.3s',
        width: '90%',
        overflow: 'initial',
        background: '#ffffff',
      },
    content: {
        textAlign: 'center',
        overflowX: 'auto',
      },
}));



const App = () => {
// class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         todos: [],
    //         filter: 'all'
    //     }
    //     this.nextTodoId = 0;
    // }

    // render() {
        // const todos = this.getVisibleTodos();
        // const {filter} = this.props;
        const classes = useStyles();
        // const cardHeaderStyles = 
        return (
            <Container> {/**material-ui container */}
            <Box display="flex"
                 alignItems="center"
                 justifyContent="center"
                 >
                <Card className={classes.card}>
                    <CardContent>
                        MY TODO LIST
                    </CardContent>
                    <Box display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    >
                        <AddTodoContainer />
                    </Box>
                    <Box display="flex" 
                    alignItems="center" 
                    justifyContent="center" 
                    >
                        <CardContent>
                            <TodoListContainer />
                        </CardContent>
                    </Box>
                    <Box display="flex" 
                    alignItems="center" 
                    justifyContent="center" 
                    >
                        <FooterContainer />
                    </Box>
                    {/* <AddTodo addTodo={this.addTodo} />
                    <TodoList todos={todos} toggleTodo={this.toggleTodo} />
                    <Footer filter={filter} setVisibilityFilter={this.setVisibilityFilter} /> */}
                    <Box  display="flex" 
                    alignItems="center" 
                    justifyContent="right" 
                    >
                        <CardContent>
                            Made by Wendy with 
                            <Favorite
                                style={{ color: red.A400 }}
                            ></Favorite>
                        </CardContent>
                    </Box>
                </Card>
            </Box>
            </Container>
        );
    // }

    // // filter todos according to conditions given
    // getVisibleTodos = () => {
    //     const currentFilter = this.state.filter;
    //     return this.state.todos.filter(item => {
    //         if (currentFilter === "active") {
    //             return !item.completed;
    //         } else if (currentFilter === "completed") {
    //             return item.completed;
    //         } else {
    //             return true;
    //         }
    //     })
    // }

    // // add a new todo element
    // addTodo = (text) => {
    //     const todo = {
    //         id: this.nextTodoId++,
    //         text,
    //         complete: false
    //     };
    //     const newTodos = [todo, ...this.state.todos];
    //     this.setState ({
    //         todos: newTodos
    //     });
    // }

    // // update todo
    // toggleTodo = id => {
    //     const newTodos = this.state.todos.map(item => {
    //         return item.id === id 
    //             ? {...item, completed : !item.completed } 
    //             : item
    //     });
    //     this.setState ({
    //         todos: newTodos
    //     })
    // }

    // setVisibilityFilter = filter => {
    //     this.setState({
    //         filter
    //     })
    // }
}

export default App;