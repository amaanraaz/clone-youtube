import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState:{
        isMenuOpen: false,
        isSideMenuOpen : true,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
            state.isSideMenuOpen = true;
        },
        openSideBar: (state)=>{
            state.isSideMenuOpen = true;
        },
        closeMenu: (state)=>{
            state.isMenuOpen = false;
        },
        closeAll: (state)=>{
            state.isSideMenuOpen = false;
            state.isMenuOpen = false;
        }
    }
});

export const{toggleMenu,closeMenu,closeAll,openSideBar} = toggleSlice.actions;
export default toggleSlice.reducer;