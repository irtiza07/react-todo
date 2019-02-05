import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddToDo from './components/AddTodo';
import About from './components/About';
import Axios from 'axios';


class App extends Component {
  state = {
    todos: [
      
    ]
  };

  async componentDidMount() {
    //Or use Promises and remove async from function signature
    const response = await Axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=5');
    this.setState({ todos : response.data});
  }

  toggleCheck = (id) => {
    this.setState({ todos : this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  };

  deleteTodo = (id) => {
    this.setState({ todos : [...this.state.todos.filter(todo => todo.id !== id)]});
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({todos : [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <title> React App </title>
            <Header ></Header>
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddToDo addTodo={this.addTodo}></AddToDo>
                <Todos todos={this.state.todos} toggleCheck={this.toggleCheck} deleteTodo={this.deleteTodo}></Todos>
              </React.Fragment>
              
            )}>
            </Route>
            <Route path='/about' component={About}>
            </Route>
            
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
