import React, { Component } from 'react';
import { Container, Box, Button, Grid, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import AddBoxIcon from '@material-ui/icons/AddBox'

class AddTodo extends Component {
// const AddTodo = () => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: '',
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             <input value={this.state.text} 
    //                 onChange={this.handleChange} 
    //                 />
    //             <button 
    //                 onClick={this.handleClick}
    //                 >Add</button>
    //         </div>
    //     );
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         text: e.target.value,
    //     })
    // }

    // handleClick = () => {
    //     this.props.addTodo(this.state.text);
    //     this.setState({
    //         text: '',
    //     })
    // }
    // const classes = useStyles();
    render() {
        return (
            <Container>
            <Box 
                display="flex"
                marginTop={5}
                alignItems="center"
                justifyContent="center"
            >
            <Typography component={'span'} color="primary">
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        {/* <FormRow /> */}
                    <TextField
                        id="outlined-textarea"
                        label="ENTER NEXT ITEM"
                        placeholder='Press "Enter" for multi-line input'
                        multiline
                        size="medium"
                        variant="outlined"
                        fullWidth
                        value={this.props.text}
                        onChange={this.handleChange}
                    />
                    </Grid>
                    {/* <input value={this.props.text} onChange={this.handleChange} /> */}
                    {/* <button 
                        onClick={this.handleClick}
                        >Add</button> */}
                    <Grid item xs={1}>
                    <Button 

                        onClick={this.handleClick}
                        startIcon={<AddBoxIcon />}
                        endIcon={<AddBoxIcon />}
                        color="primary"
                        >
                            Add
                    </Button>
                    </Grid>
                </Grid>
            </Typography>
            </Box>
            </Container>
        );
    }

    handleChange = (e) => {
        this.props.setTodoText(e.target.value)
    }

    handleClick = () => {
        if (this.props.text !== "") {
            this.props.addTodo(this.props.text)
            this.props.setTodoText("") // clear the content after input
        } else {
            console.log("Tell user the textfield is empty!");
        }
    }
}

export default AddTodo;