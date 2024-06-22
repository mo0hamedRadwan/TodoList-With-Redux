import { useSelector } from 'react-redux';
import { IAppState } from '../types';

export const useFilterTodos = () => {
  // const { todoList, filter, searchTerm } = useSelector((state: IAppState) => state);
  const todoList = useSelector((state: IAppState) => state.todoList);
  const filter = useSelector((state: IAppState) => state.filter);
  const searchTerm = useSelector((state: IAppState) => state.searchTerm);

  // console.log(searchTerm);

  return todoList.filter((todo) => {
    const matchedFilter =
      filter === 'ALL' ||
      (filter === 'COMPLETED' && todo.completed === true) ||
      (filter === 'INCOMPLETED' && todo.completed === false);
    const matchSearch = searchTerm === '' || todo.title.toLowerCase().includes(searchTerm);
    // console.log(matchedFilter, matchSearch);
    return matchedFilter && matchSearch;
  });
};
