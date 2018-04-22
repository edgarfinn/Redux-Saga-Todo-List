import { combineReducers } from 'redux';
import ToDosReducer from './reducer_todos';

const rootReducer = combineReducers({
  todoList: ToDosReducer,
});

export default rootReducer;
