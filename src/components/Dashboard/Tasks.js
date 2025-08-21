import React, { useState, useEffect } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([]); // initialize as empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Later, fetch tasks from API or offerwall
    // For now, keep empty
    setTasks([]); 
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center text-lg mt-5">Loading tasks...</p>;
  }

  return (
    <div className="min-h-screen bg-orange-100 p-5">
      <h2 className="text-xl font-bold mb-4">Available Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks available yet. Check back soon!</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="bg-white p-4 rounded-xl shadow">
              {task.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
