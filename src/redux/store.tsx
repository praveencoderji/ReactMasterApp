import { configureStore, Middleware } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


const loggingMiddleware: Middleware = storeAPI => next => action => {
    //storeAPI typically includes and use for 
    //     dispatch: A method to dispatch actions to the store.
    // getState: A method to get the current state of the store.
    return next(action);
};

const store = configureStore({
    reducer: {
        counter: counterSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggingMiddleware),
}
    // middleware: (getDefaultMiddleware) => [
    //   ...getDefaultMiddleware(),
    //   customMiddleware1,
    //   customMiddleware2,
    // ],
)
export type AppDispatch = typeof store.dispatch;

export default store;