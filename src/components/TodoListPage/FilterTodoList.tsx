import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update_search_term } from '../../redux/actions';
import FilterButton from './FilterButton';

const FilterTodoList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    dispatch(update_search_term(value));
  };
  return (
    <div className="flex flex-col sm:flex-row gap-y-4 items-center justify-between">
      <FilterButton />
      <div className="flex items-center mb-4">
        <input
          type="text"
          name="searchTermInput"
          id="searchTermInput"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="flex flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterTodoList;
