import React, { useMemo, useReducer } from "react";
import { ICounterAction, ICounterState, ITodoItem, DispatchActions } from "../types/todo";

const defaultState: ICounterState = {
    todos: []
};

const reducer = (state: ICounterState, action: ICounterAction): ICounterState => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
               ...state,
                todos: [...state.todos, action.payload]
            };
        case 'DELETE_TODO':
            return {
               ...state,
                todos: state.todos.filter(todo => todo.id!== action.payload)
            };
        case 'UPDATE_TODO':
            const { payload } = action;
            return {
               ...state,
                todos: state.todos.map(todo => todo.id === payload.id? payload : todo)
            };
        default:
            return state;
    }
};

export const TodoContext = React.createContext({} as ICounterState);
TodoContext.displayName = "TODO_CONTEXT"

export const TodoProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultState);


    const addTodos = (data: ITodoItem) => {
        dispatch({
            type: 'ADD_TODO',
            payload: data

        })
    }

    const deleteTodo = (id: string) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id

        })
    }


    const updateTodoStatus = (data: ITodoItem) => {
        dispatch({
            type: 'UPDATE_TODO',
            payload: data

        })
    }

    const value = useMemo(
        () => ({
            ...state,
            addTodos,
            deleteTodo,
            updateTodoStatus
        }),
        [state]
    )

    return <TodoContext.Provider value={value} {...props}/>
};


export const useTodoContext = (): ICounterState & DispatchActions => {
    const context = React.useContext(TodoContext) as ICounterState & DispatchActions
    if (context === undefined) {
        throw new Error(`useUI must be used within a UIProvider`)
    }
    return context
}


export const TodoContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) =>
(
    <TodoProvider >
        {children}
    </TodoProvider>
)
