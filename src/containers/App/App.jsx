import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import AddTodoButton from '../../components/AddTodoButton/add_todo_button';
import NewTodoInput from '../../components/NewTodoInput/new_todo_input';
import ToDoList from '../TodoList/to_do_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoTextChange = this.handleTodoTextChange.bind(this);
  }

  handleTodoTextChange(text) {
    this.setState({
      newTodoText: text
    })
  }

  handleSubmit() {
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state.newTodoText })
  }

  render() {
    const { todoList } = this.props;
    return (
      <div className="app">
        <h1>To Do List App</h1>
        <NewTodoInput onTextChange={this.handleTodoTextChange}/>
        <AddTodoButton onClick={this.handleSubmit}/>
        <ToDoList todos={todoList}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  }
}

export default hot(module)(connect(mapStateToProps)(App));
