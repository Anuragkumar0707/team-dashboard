import React from "react";

export default function MemberCard({ member }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-gray-600">Role: {member.role}</p>
      <p className="text-sm text-gray-600">Tasks: {member.tasks.length}</p>
    </div>
  );
}
