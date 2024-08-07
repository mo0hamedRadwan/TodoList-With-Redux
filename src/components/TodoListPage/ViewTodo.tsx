import { useDispatch } from 'react-redux';
import { remove_todo, toggle_todo } from '../../redux/actions';
import { ITodoPropsType } from '../../types';
import icons from '../../constant/icons';

const ViewTodo = ({ todo, index, setUpdateItem }: ITodoPropsType) => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(toggle_todo(todo.id))} className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span className={`mr-4 sm:w-[400px] text-left ${todo.completed ? 'line-through text-red-500' : ''}`}>
          {todo.title}
        </span>
      </button>
      <div className="space-x-3 ml-8 flex items-center">
        <button onClick={() => setUpdateItem!(true)}>
          <img src={icons.editIcon} alt="edit todo" className="w-6 h-6" />
        </button>
        <button onClick={() => dispatch(remove_todo(todo.id))}>
          <img src={icons.deleteIcon} alt="delete todo" className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default ViewTodo;
