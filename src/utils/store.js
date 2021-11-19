import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user'
 
export default configureStore({
    reducer: {
        // token: tokenReducer,
        user: userReducer,
        // profile: profileReducer,
    },
})