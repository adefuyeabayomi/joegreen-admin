import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  email: "",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { updateEmail, updateAccessToken } = userSlice.actions;

export default userSlice.reducer;