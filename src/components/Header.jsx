import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRole } from "../redux/slices/roleSlice";

export default function Header() {
  const role = useSelector((state) => state.role.currentRole);
  const dispatch = useDispatch();

  return (
    <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Team Pulse Dashboard</h1>

      <select
        value={role}
        onChange={(e) => dispatch(setRole(e.target.value))}
        className="bg-indigo-500 px-2 py-1 rounded"
      >
        <option value="admin">Admin</option>
        <option value="member">Member</option>
        <option value="viewer">Viewer</option>
      </select>
    </header>
  );
}
