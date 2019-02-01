import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTodo extends Component {

    state = {
        title: ''
    }

    fieldOnChange = (e) => {
        this.setState({ title : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title : '' })
    }

    render() {
        return (
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input 
            type="text" 
            name="title" 
            placeholder="Add Todo"
            style={{ flex: '10', padding : '5px' }}
            value={this.state.title}
            onChange={this.fieldOnChange}>
            </input>
            <input 
            type="submit" 
            value="Submit"
            className="button"
            style={{flex: '1'}}>
            </input>
        </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo : PropTypes.func
  }

export default AddTodo
