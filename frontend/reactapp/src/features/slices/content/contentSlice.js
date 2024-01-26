import { createSlice } from "@reduxjs/toolkit";


export const contentSlice = createSlice({
    name: 'contentSlicer',
    initialState: {
        collectionID: 3,
        collectionTitle: 'All bookmarks',
        itemsByCollection: [],
    },
    reducers: {
        incremetCollection: (state, action) => {
            state.collectionID = action.payload['collection'];
            state.collectionTitle = action.payload['collectionTitle'];
        },
        incremetItemsChunk: (state, action) => {
            state.itemsByCollection = action.payload['items'];
        },
        addNewItem: (state, action) => {
            state.itemsByCollection = [...state.itemsByCollection, action.payload]
        },
        changeItem: (state, action) => {
            let tempArray = []
            for (let i = 0; i < state.itemsByCollection.length; i++){
                if (state.itemsByCollection[i].id === action.payload.id){
                    if (state.collectionID === action.payload.collection){
                        //change item in itemByCollection
                        state.itemsByCollection[i].title = action.payload.title
                        state.itemsByCollection[i].url_field = action.payload.url_field
                        state.itemsByCollection[i].description = action.payload.description
                    } else {
                        //delete item from itemByCollection
                        tempArray = [...state.itemsByCollection.slice(0,i), ...state.itemsByCollection.slice(i + 1)];
                        state.itemsByCollection = tempArray;
                    }
                    break;
                }
            }
        },
        deleteItem: (state, action) => {
            let tempArray = [];
            for (let i = 0; i < state.itemsByCollection.length; i++){
                if (state.itemsByCollection[i].id === action.payload){
                        tempArray = [...state.itemsByCollection.slice(0,i), ...state.itemsByCollection.slice(i + 1)];
                        break;
                }
            }
            state.itemsByCollection = tempArray;
            },
        }
    },
)

export const {incremetCollection, incremetItemsChunk, 
              addNewItem, changeItem, 
              deleteItem} = contentSlice.actions

export default contentSlice.reducer