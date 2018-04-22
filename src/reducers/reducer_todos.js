export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return action.todos.data;
  }
  return state;
}
