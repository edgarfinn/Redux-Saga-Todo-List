export const deletePost = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const fetchTodos = () => {
  return { type: 'FETCH_TODOS' }
}
