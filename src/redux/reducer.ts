import { IActionType, IAppState } from '../types';
import {
  ADD_TODO,
  FILTER_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from './actionTypes';

const initialState: IAppState = {
  todoList: [],
  filter: 'ALL',
  searchTerm: '',
};

const todoListReducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: Math.random(),
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload.id),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
        ),
      };
    case FILTER_TODO:
      return {
        ...state,
        filter: action.payload.filter
      };
    case UPDATE_SEARCH_TERM:
      return {
       ...state,
        searchTerm: action.payload.term,
      };
    case MARK_ALL_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.map((todo) => ({ ...todo, completed: true })),
      };
    default:
      return state;
  }
};

export default todoListReducer;
