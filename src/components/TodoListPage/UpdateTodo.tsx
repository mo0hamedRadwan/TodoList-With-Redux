import { useState } from 'react';
import { ITodoPropsType } from '../../types';
import { useDispatch } from 'react-redux';
import { update_todo } from '../../redux/actions';

const UpdateTodo = ({ todo, index, setUpdateItem }: ITodoPropsType) => {
  const [newTitle, setNewTitle] = useState<string>(todo.title);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(update_todo(todo.id, newTitle));
    setUpdateItem!(false);
  };

  return (
    <>
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <input
          type="text"
          name="newTodoTitle"
          id="newTodoTitle"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="p-2 sm:w-[400px] focus:outline-none border-b-2 border-blue-500 bg-transparent"
        />
      </div>
      <div className="space-x-3 ml-8 flex items-center">
        <button onClick={handleUpdate}>
          <img src="./src/assets/icons/done.png" alt="done update todo" className="w-6 h-6" />
        </button>
        <button onClick={() => setUpdateItem!(false)}>
          <img src="./src/assets/icons/cancel.png" alt="cancel update todo" className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default UpdateTodo;
