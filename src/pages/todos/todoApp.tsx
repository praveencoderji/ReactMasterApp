import { useMemo } from "react";
import InfoTodos from "./components/InfoTodos";
import { getTodosQty, getCompletedTodosQty } from "./utils/getTaskInfos";
import AddTodo from "./components/addTodo";
import { useTodoContext } from "../../contexts/TodoContext";
import TodoList from "./components/todoList";

const Todos = () => {

    const { todos, deleteTodo, updateTodoStatus, addTodos } = useTodoContext()

    const qtyTodos = useMemo(() => getTodosQty(todos), [todos]);

    const qtyTodosCompleted = useMemo(() => getCompletedTodosQty(todos), [
        todos
    ]);
    return (
        <div className="flex items-center justify-center mt-10 ">

            <div className="w-full max-w-lg text-center" style={{ marginTop: '7%' }}>
                <h1>Todo App</h1>

                <div className="bg-white p-6 rounded-lg shadow-md" >
                    <AddTodo addTodos={addTodos} />
                    <InfoTodos qtyTodos={qtyTodos} qtyTodosCompleted={qtyTodosCompleted} />
                    <TodoList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        updateTodoStatus={updateTodoStatus}
                    />
                </div>
                <div className='mr-3 underline mt-4'>
                    <a href='/' > {'<'}Back to Home  </a>
                </div>
            </div>
        </div>
    );
};

export default Todos;
