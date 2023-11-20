import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1,
    },
    reducers: {
        incremet: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incremetByAmount: (state, action) => {
            state.value = action.payload
        },
    },
})

export const {incremet, decrement, incremetByAmount} = counterSlice.actions

export default counterSlice.reducer