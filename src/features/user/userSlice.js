import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state,action)=>{
      state.currentUser =action.payload;
      localStorage.setItem("user" ,JSON.stringify())
    },
    
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { logOut,setCurrentUser } = userSlice.actions;
export default userSlice.reducer;