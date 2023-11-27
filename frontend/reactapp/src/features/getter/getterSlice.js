import { createSlice } from "@reduxjs/toolkit";


export const getterSlice = createSlice({
    name: 'getter',
    initialState: {
        urlField: 'http://127.0.0.1:8000/api/items',
        collectionID: 0,
    },
    reducers: {
        incremetNewChunk: (state, action) => {
            state.urlField = 'http://127.0.0.1:8000/api/' + action.payload['path'];
            state.collectionID = action.payload['collection'];
        },
    },
})

export const {incremetNewChunk} = getterSlice.actions

export default getterSlice.reducer