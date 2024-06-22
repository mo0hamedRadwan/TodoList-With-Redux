import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../types';
import { filter_todo, mark_all_completed } from '../../redux/actions';

const FilterButton = () => {
  const currentFilter = useSelector((state: IAppState) => state.filter);
  const dispatch = useDispatch();

  const handleFilter = (filter: string) => {
    dispatch(filter_todo(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">ALL</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">Incompleted</option>
      </select>
      <button
        className="text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded"
        onClick={() => dispatch(mark_all_completed())}
      >
        Mark all completed
      </button>
    </div>
  );
};

export default FilterButton;
