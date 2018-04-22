import { fetchTodos, createTodo, deleteTodo} from './sagas';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

const URL = "http://reduxblog.herokuapp.com/api/posts?key=edgar1234";

describe('fetchTodos', () => {
  const iterator = fetchTodos();
  test('first yield', () => {
    const firstCall = iterator.next();
    expect(firstCall).toEqual({value: call(axios.get, URL), done: false});
  })

  test('second yield', () => {
    const secondCall = iterator.next();
    expect(secondCall).toEqual({value: put({type: 'FETCH_TODOS_SUCCESS', todos: undefined}), done: false})
  })
  
  test('third yield', () => {
    const thirdCall = iterator.next();
    expect(thirdCall).toEqual({value: undefined, done: true})
  })
})
