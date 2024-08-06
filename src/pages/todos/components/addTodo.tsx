import { FormEvent, useRef, useState } from "react";

interface AddTodoProps {
    addTodos: (data: any) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodos }) => {
    const inputEl = useRef(null);
    const [todoText, setTodoText] = useState("");

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        if (todoText.trim() === "") {
            return;
        }
        const todoItem = {
            id: crypto.randomUUID(),
            title: todoText,
            completed: false,
        }
        addTodos(todoItem);
        setTodoText('')

    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const todoItem = {
                id: crypto.randomUUID(),
                title: todoText,
                completed: false,
            }
            addTodos(todoItem);
            setTodoText('')
        }
    };
    return (
        <div >
            <form >
                <input
                    ref={inputEl}
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="rounded-[46px] border border-gray-500 outline-none p-1.5 px-4 w-full max-w-[400px] focus:border-green-500"
                />
                {/* <button 
            className="ml-2 min-w-[120px]  px-4 text-lg font-medium text-white bg-gray-500 rounded-md hover:bg-gray-700" 
            type="button" 
            onClick={submitHandler}
          >
            Add Task
          </button> */}
            </form>
        </div>
    );
}

export default AddTodo;