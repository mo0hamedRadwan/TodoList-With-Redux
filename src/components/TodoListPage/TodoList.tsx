import TodoItem from './TodoItem';
import { useFilterTodos } from '../../hooks/useFilterTodos';

const TodoList = () => {
  const filteredTodos = useFilterTodos();
  // console.log(filteredTodos);
  return (
    <ul>
      <li className="my-2 text-sm italic">
        {filteredTodos.map((todo, index) => (
          <TodoItem todo={todo} index={index} key={todo.id}></TodoItem>
        ))}
      </li>
    </ul>
  );
};

export default TodoList;
