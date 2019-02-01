import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => 
        <TodoItem key={todo.id} todo={todo} toggleCheck={this.props.toggleCheck} deleteTodo={this.props.deleteTodo}></TodoItem>
    );
  }
}

Todos.propTypes = {
    todos : PropTypes.arrayOf(Object),
    toggleCheck : PropTypes.func,
    deleteTodo : PropTypes.func
}

export default Todos
