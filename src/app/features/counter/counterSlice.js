import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count = state.count - 1
            }
        },
        increaseByFive: (state, action) => {
            state.count = state.count + action.payload
        },
        reset: (state) => {
            state.count = 0
        },
    }
})

export const { increment, decrement, reset, increaseByFive } = counterSlice.actions


export default counterSlice.reducer