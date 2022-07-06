import {configureStore} from "@reduxjs/toolkit"
import { userReducer,postOfFollwoingReducer,allUserReducer } from "./Reducers/User" 
import { likeReducer } from "./Reducers/Post"
const store = configureStore({
    reducer:{
        user:userReducer,
        postOfFollowing :postOfFollwoingReducer,
        allUsers :allUserReducer,
        likePost: likeReducer,
    }
})
export default store