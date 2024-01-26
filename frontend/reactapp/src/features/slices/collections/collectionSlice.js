import { createSlice } from "@reduxjs/toolkit";


export const collectionSlice = createSlice({
    name: 'collectionSlicer',
    initialState: {
        collections: [],
    },
    reducers: {
        setCollections: (state, action) => {
            state.collections = action.payload;
        },
        addCollection: (state, action) => {
            state.collections = [...state.collections, action.payload];
        },
        removeCollection: (state, action) => {
            let tempArray = [];
            for (let i = 0; i < state.collections.length; i++){
                if (state.collections[i].id === action.payload){
                        tempArray = [...state.collections.slice(0,i), ...state.collections.slice(i + 1)];
                        break;
                }
            }
            state.collections = tempArray;
        },
        changeCollection: (state, action) => {
            for (let i = 0; i < state.collections.length; i++){
                if (state.collections[i].id === action.payload.id){
                    state.collections[i].title = action.payload.title;
                    state.collections[i].slug = action.payload.slug;                    
                    break;
                }
            }
        },
    }
})

export const {setCollections, addCollection, removeCollection, changeCollection} = collectionSlice.actions

export default collectionSlice.reducer