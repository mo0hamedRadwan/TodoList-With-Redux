import FilterTodoList from './FilterTodoList';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoListPage = () => {
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Personal Todo List</h2>
      <TodoForm />
      <FilterTodoList />
      <TodoList />
    </div>
  );
};

export default TodoListPage;
