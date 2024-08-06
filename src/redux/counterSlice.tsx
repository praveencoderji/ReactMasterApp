
import { createSlice } from "@reduxjs/toolkit"
import { AppError, initialCounterState } from "./root-state"
import { fetchUser } from "./thunks";


export const  CounterSlice = createSlice({
    name: 'counterSclice',
    initialState: initialCounterState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        toggleLoading: (state) => {
            state.loading = !state.loading;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUser.pending, (state) => {
            state.loading = 'loading';
          })
          .addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = 'idle';
            state.user = action.payload;
          })
          .addCase(fetchUser.rejected, (state, action) => {
            state.loading = 'idle';
            state.error = action.payload
          });
      },
})


export const { increment, decrement, toggleLoading } = CounterSlice.actions

export default CounterSlice.reducer;