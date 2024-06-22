import { ITodoPropsType } from '../../types';
import { useState } from 'react';
import ViewTodo from './ViewTodo';
import UpdateTodo from './UpdateTodo';

const TodoItem = ({ todo, index }: ITodoPropsType) => {
  const [updateItem, setUpdateItem] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4`}
    >
      {updateItem ? (
        <UpdateTodo todo={todo} index={index} setUpdateItem={setUpdateItem} />
      ) : (
        <ViewTodo todo={todo} index={index} setUpdateItem={setUpdateItem} />
      )}
    </div>
  );
};

export default TodoItem;
