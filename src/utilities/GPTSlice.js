import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name : "GPT",
    initialState : {
        gptToggle : false,
        gptMovies : null,
        gptSearch : null,
    },
    reducers : {
        addGpt: (state)=>{
            state.gptToggle=!state.gptToggle;
        },
        addGptMovies: (state,action)=>{
            state.gptMovies=action.payload;
        },
        addGptSearchedResult: (state,action)=>{
            state.gptSearch=action.payload;
        },
        
    }
});

export const {addGpt,addGptMovies,addGptSearchedResult} = GPTSlice.actions;

export default GPTSlice.reducer;