import { ITodoItem } from "../../../types/todo";

export const getTodosQty = (todos: ITodoItem[]) => {
    if (todos) return todos.length;
    return 0;
  };
  
  export const getCompletedTodosQty = (todos : ITodoItem[]) => {
    if (todos) return todos?.filter((todo) => todo.completed).length;
    return 0;
  };