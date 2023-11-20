import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import getterReducer from '../features/getter/getterSlice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        getter: getterReducer,
    },
})
