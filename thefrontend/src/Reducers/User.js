import {createReducer} from "@reduxjs/toolkit"
 const intitialStore ={}
export const userReducer = createReducer(intitialStore,{
    loginRequest : (state,action) =>{
        state.loading = true;
    },
    //action types
    loginSuccess: (state,action) =>{
        state.loading = false
        state.user = action.payload
    },
    loginFailure: (state,action)=>{
            state.loading = false
            state.error = action.payload
    },

    RegisterRequest:(state,action) =>{
        state.loading = true

    },
    RegisterSuccess:(state,action) =>{
        state.loading = false
        state.user = action.payload
    },
    RegisterFailure:(state,action) =>{
        state.loading = false
        state.error = action.payload
    },

    LoadUserRequest:(state,action) =>{
        state.loading = true
    },
    LoadUserSuccess:(state,action) =>{
        state.loading = false;
        state.user = action.payload
    },
    LoadUserFailure:(state,action) =>{
        state.loading = false;
        state.error = action.payload
    },


     
})