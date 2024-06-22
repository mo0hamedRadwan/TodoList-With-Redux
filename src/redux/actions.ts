import {
  ADD_TODO,
  MARK_ALL_COMPLETED,
  FILTER_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  UPDATE_SEARCH_TERM,
} from './actionTypes';

export const add_todo = (title: string) => {
  return {
    type: ADD_TODO,
    payload: { title },
  };
};

export const toggle_todo = (id: number) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
};

export const update_todo = (id: number, title: string) => {
  return {
    type: UPDATE_TODO,
    payload: { id, title },
  };
};

export const remove_todo = (id: number) => {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
};

export const filter_todo = (filter: string) => {
  return {
    type: FILTER_TODO,
    payload: { filter },
  };
};

export const mark_all_completed = () => {
  return {
    type: MARK_ALL_COMPLETED,
  };
};

export const update_search_term = (term: string) => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: { term },
  };
};