import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
    resetUser: (state, _action) => {
      const { name, email } = initialState;
      state.name = name;
      state.email = email;
    },
  },
});

export const { addUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
