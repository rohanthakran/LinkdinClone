import {createReducer} from "@reduxjs/toolkit"
 const initialState ={}
 export const likeReducer = createReducer(initialState,{
    likeRequest:(state,action) =>{
        state.loading=true
    },
    likeSuccess:(state,action) =>{
        state.loading=false,
        state.message= action.payload
    },
    likeFailue:(state,action) =>{
        state.loading= false,
        state.message = action.payload
    },
    clearErrors:(state,action) =>{
        state.error = null
    },
    clearMessage:(state,action) =>{
        state.message = null
    }
 })