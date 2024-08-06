

export interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export interface ICounterState {
  todos: ITodoItem[];
}

export interface DispatchActions {
  addTodos: (data: ITodoItem) => void;
  deleteTodo: (id: string) => void;
  updateTodoStatus: (data: ITodoItem) => void;
}

export type ICounterAction =
  | { type: 'ADD_TODO'; payload: ITodoItem }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'UPDATE_TODO'; payload: ITodoItem}