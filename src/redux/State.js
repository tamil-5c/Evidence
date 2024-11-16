import { createSlice } from "@reduxjs/toolkit";

const initialState=createSlice({
    name:'autonomous',
    getValue:'',

    reducer:{
        setData:(state,action)=>{
            state.getValue=action.payload;
        }
    }
});

export const {setData}=initialState.actions;

export default initialState.reducer;