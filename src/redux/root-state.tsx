import { error } from "console";

export interface RootState {
    counter: CounterState
  }

  export interface AppError {
    message: string;
    code?: number; // Optional status code
  }

  export interface CounterState {
    count: number
    loading: boolean | string;
    user: {
        id: string,
        name: string,
        email: string,
        role: string,
        token: string | null,
    },
    error?: AppError | null | unknown
  }


export const initialCounterState: CounterState = Object.freeze({
    count: 0,
    loading: true,
    user: {
        id: "",
        name: "",
        email: "",
        role: "",
        token: null,
    },
    error: null
  });



  export const initialRootState: RootState = Object.freeze({
    counter: initialCounterState
  });