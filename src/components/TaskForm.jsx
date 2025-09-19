import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/membersSlice";

export default function TaskForm({ memberId }) {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ memberId, task }));
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
        className="border px-2 py-1 rounded flex-1"
      />
      <button className="bg-indigo-600 text-white px-3 py-1 rounded">
        Add
      </button>
    </form>
  );
}
