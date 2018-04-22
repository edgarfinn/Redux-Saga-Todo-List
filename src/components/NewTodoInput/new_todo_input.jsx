import React, { Component } from 'react';

class NewTodoInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: ''
    }
  }

  handleInputChange(text) {
    this.setState({task: text});
    this.props.onTextChange(text)
  }

  render() {
    return (
      <div className="input-new-todo">
        <input
          onChange={event => this.handleInputChange(event.target.value)}
          type="text"
          placeholder="new task"
          value={this.state.task}
        />
      </div>
    )
  }
}

export default NewTodoInput;
