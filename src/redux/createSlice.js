import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeUsers: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    removeAllUsers: (state) => {
      state.value = [];
    },
  },
});

export const { addUser, removeUsers, removeAllUsers } = userSlice.actions;
export default userSlice.reducer;
