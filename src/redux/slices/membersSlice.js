import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Alice", role: "Developer", tasks: [] },
  { id: 2, name: "Bob", role: "Designer", tasks: [] },
];

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { memberId, task } = action.payload;
      const member = state.find((m) => m.id === memberId);
      if (member) {
        member.tasks.push(task);
      }
    },
  },
});

export const { addTask } = membersSlice.actions;
export default membersSlice.reducer;
