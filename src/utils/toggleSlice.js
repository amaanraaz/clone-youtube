import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state)=>{
            state.isMenuOpen = false;
        }
    }
});

export const{toggleMenu,closeMenu} = toggleSlice.actions;
export default toggleSlice.reducer;