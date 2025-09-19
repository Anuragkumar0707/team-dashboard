import React from "react";

export default function StatusSelector({ status, setStatus }) {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="border px-2 py-1 rounded"
    >
      <option value="todo">To Do</option>
      <option value="inprogress">In Progress</option>
      <option value="done">Done</option>
    </select>
  );
}
