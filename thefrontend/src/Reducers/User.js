import {createReducer} from "@reduxjs/toolkit"
 const initialState ={
    isAuthenticated:false
 }
export const userReducer = createReducer(initialState,{
    loginRequest : (state,action) =>{
        state.loading = true;
    },
    //action types
    loginSuccess: (state,action) =>{
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
    },
    loginFailure: (state,action)=>{
            state.loading = false
            state.error = action.payload
            state.isAuthenticated = false
    },

    RegisterRequest:(state,action) =>{
        state.loading = true

    },
    RegisterSuccess:(state,action) =>{
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true

    },
    RegisterFailure:(state,action) =>{
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false

    },

    LoadUserRequest:(state,action) =>{
        state.loading = true
    },
    LoadUserSuccess:(state,action) =>{
        state.loading = false;
        state.user = action.payload
        state.isAuthenticated = true

    },
    LoadUserFailure:(state,action) =>{
        state.loading = false;
        state.error = action.payload
        state.isAuthenticated = false
    },
    clearError : (state ) =>{
        state.error = null
    }
     
})

export const postOfFollwoingReducer = createReducer(initialState,{
    postOfFollowingRequest : (state,action) =>{
        state.loading =true
    },
    postOfFollowingSuccess : (state,action) =>{
        state.loading =false
        state.posts = action.payload

    }, 
    postOfFollowingFailure : (state,action) =>{
        state.loading =false
        state.posts = action.payload
    },
    clearError : (state ) =>{
        state.error = null
    }
})
export const allUserReducer = createReducer(initialState,{
   allUsersRequest : (state,action) =>{
        state.loading =true
    },
   allUsersSuccess : (state,action) =>{
        state.loading =false
        state.users = action.payload

    }, 
   allUsersFailure : (state,action) =>{
        state.loading =false
        state.users = action.payload
    },
    clearError : (state ) =>{
        state.error = null
    }
})