import React from "react";

export default function Home({ user, earnings = 0, tasksCompleted = 0 }) {
  return (
    <div style={pageStyle}>
      <h2>Welcome, {user?.email || "User"} 👋</h2>
      <p>Here’s your progress so far:</p>

      <div style={cardStyle}>
        <h3>💰 Earnings</h3>
        <p>${earnings.toFixed(2)}</p>
      </div>

      <div style={cardStyle}>
        <h3>📝 Tasks Completed</h3>
        <p>{tasksCompleted}</p>
      </div>
    </div>
  );
}

const pageStyle = {
  background: "linear-gradient(135deg, #FFD580, #FFA559)",
  minHeight: "100%",
  padding: "20px",
  color: "#333"
};

const cardStyle = {
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  marginTop: "15px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};
