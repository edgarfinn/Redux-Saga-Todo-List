import React from 'react';

export default ({todo, deleteTodo}) => {
  return (
    <li className="todo-item">
      <span>
        {todo.content}
      </span>
      <span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </span>
    </li>
  )
}
