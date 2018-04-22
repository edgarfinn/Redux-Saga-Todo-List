import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoItem from '../../components/ToDoItem/todo_item';
import { deletePost, fetchTodos } from '../../actions';

import { bindActionCreators } from 'redux';

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  deleteTodo(id) {
    this.props.deletePost(id)
  }

  render() {
    const { todos } = this.props
    return (
      <ul>
        {todos.map(
          todo => <ToDoItem deleteTodo={this.deleteTodo} key={todo.id} todo={todo}/>
        )}
      </ul>
    )
  }
}

const mapDispatchToprops = (dispatch) => {
  return bindActionCreators({ deletePost, fetchTodos }, dispatch)
}

export default connect(null, mapDispatchToprops)(ToDoList);
