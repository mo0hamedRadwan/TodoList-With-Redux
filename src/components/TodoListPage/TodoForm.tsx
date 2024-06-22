import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_todo } from '../../redux/actions';

const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const handleAddTodo = (e: SyntheticEvent) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      dispatch(add_todo(todoText.trim()));
    }
  };

  return (
    <form className="flex items-center mb-4" onSubmit={handleAddTodo}>
      <input
        type="text"
        name="addTodoInput"
        id="addTodoInput"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add Todo"
        className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
