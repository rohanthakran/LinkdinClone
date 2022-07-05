import {configureStore} from "@reduxjs/toolkit"
import { userReducer,postOfFollwoingReducer } from "./Reducers/User" 
const store = configureStore({
    reducer:{
        user:userReducer,
        postOfFollowing :postOfFollwoingReducer
    }
})
export default store