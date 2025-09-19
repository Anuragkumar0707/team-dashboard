import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
  name: "role",
  initialState: { currentRole: "viewer" },
  reducers: {
    setRole: (state, action) => {
      state.currentRole = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
