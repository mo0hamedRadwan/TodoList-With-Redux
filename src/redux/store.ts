import { createStore } from 'redux';
import todoListReducer from './reducer';
import { IAppState } from '../types';

// convert object to string and store in localStorage
function saveToLocalStorage(state: IAppState) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('AppState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('AppState');
    if (serialisedState === null)
      return {
        todoList: [],
        filter: 'ALL',
        searchTerm: '',
      };
    return JSON.parse(serialisedState);
  } catch (e) {
    return console.warn(e);
  }
}

const todoListStore = createStore(todoListReducer, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
todoListStore.subscribe(() => saveToLocalStorage(todoListStore.getState()));

export default todoListStore;
