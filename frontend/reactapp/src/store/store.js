import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/slices/counter/counterSlice';
import contentReducer from '../features/slices/content/contentSlice';
import collectionReducer from '../features/slices/collections/collectionSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        contReducer: contentReducer,
        colReducer: collectionReducer,
    },
})
