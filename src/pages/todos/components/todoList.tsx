import React from "react";
import { ITodoItem } from "../../../types/todo";


type TodoListProps = {
  todos: ITodoItem[];
  deleteTodo: (id: string) => void;
  updateTodoStatus: (data: ITodoItem) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, updateTodoStatus }) => {
  console.log("todos", todos)
  const handleTodoUpdate = (todo: ITodoItem, event: React.MouseEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    const updateTodoData = {
      ...todo,
      completed: isChecked
    }
    updateTodoStatus(updateTodoData)
  }

  return todos.length > 0 ? (
    <ul className="space-y-2">
      {todos.map(({ id, title, completed }) => (
        <li key={id} className="flex items-center p-2 bg-white border border-gray-200 rounded-md shadow-sm">
          <input
            type="checkbox"
            checked={completed}
            onClick={(event) => handleTodoUpdate({ id, title, completed }, event)}
            className="mr-2 h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-400"
          />
          <span className={`flex-1 ${completed ? 'line-through text-gray-500' : ''}`}>
            {title}
          </span>
          <button
            className="ml-2 px-2 py-1 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-700"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <h2 className="text-center text-xl font-semibold text-gray-700 mt-4">No Todo's!</h2>
  );
};

export default TodoList;