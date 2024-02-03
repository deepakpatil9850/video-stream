import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name:"menuSlice",
    initialState:{
        menuState: true,
    },
    reducers:{
        isSetMenu:(state)=>{
            state.menuState = ! state.menuState;
        }
    }
})

export const{ isSetMenu} = menuSlice.actions;
export default menuSlice.reducer;
