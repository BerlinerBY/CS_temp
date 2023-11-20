import { createSlice } from "@reduxjs/toolkit";


export const getterSlice = createSlice({
    name: 'getter',
    initialState: {
        value: 'http://127.0.0.1:8000/api/items',
    },
    reducers: {
        incremetNewChunk: (state, action) => {
            state.value = 'http://127.0.0.1:8000/api/' + action.payload
        },
    },
})

export const {incremetNewChunk} = getterSlice.actions

export default getterSlice.reducer