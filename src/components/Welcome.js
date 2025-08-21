import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #FFD700, #FF8C00)",
      color: "#fff",
      textAlign: "center"
    }}>
      <h1>Welcome to TRX App</h1>
      <p>Earn money by completing daily tasks!</p>
      <button 
        onClick={() => navigate('/login')} 
        style={{
          background: "#fff",
          color: "#FF8C00",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Get Started
      </button>
    </div>
  );
}