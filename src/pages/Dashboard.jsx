import React, { useState } from "react";
import { useSelector } from "react-redux";
import MemberCard from "../components/MemberCard";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const members = useSelector((state) => state.members);
  const role = useSelector((state) => state.role.currentRole);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <main className="p-6">
      <h2 className="text-lg font-semibold mb-4">Team Members</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded shadow p-4"
            onClick={() => setSelectedMember(member.id)}
          >
            <MemberCard member={member} />
            <TaskList memberId={member.id} />
            {role === "admin" && <TaskForm memberId={member.id} />}
          </div>
        ))}
      </div>
    </main>
  );
}
