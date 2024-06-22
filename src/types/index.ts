export type ITodoType = {
  id: number;
  title: string;
  completed: boolean;
};

export type IAppState = {
  todoList: ITodoType[];
  filter: string;
  searchTerm: string;
};

export type IActionType = {
  type: string;
  payload: { id: number; title: string; term: string; filter: string };
};

export type ITodoPropsType = {
  todo: ITodoType;
  index: number;
  setUpdateItem?: React.Dispatch<React.SetStateAction<boolean>>;
};
