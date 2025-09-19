import React from "react";
import { useSelector } from "react-redux";

export default function TaskList({ memberId }) {
  const member = useSelector((state) =>
    state.members.find((m) => m.id === memberId)
  );

  if (!member) return null;

  return (
    <ul className="list-disc ml-6 mt-2">
      {member.tasks.map((t, i) => (
        <li key={i} className="text-sm text-gray-700">
          {t}
        </li>
      ))}
    </ul>
  );
}
