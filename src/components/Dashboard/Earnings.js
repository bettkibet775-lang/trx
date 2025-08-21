import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function Earnings() {
  const [earnings, setEarnings] = useState(0); // default to 0
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEarnings = async () => {
      try {
        // Later, fetch from a real "earnings" table
        // For now, default to 0
        setEarnings(0);
      } catch (error) {
        console.error("Error fetching earnings:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEarnings();
  }, []);

  return (
    <div style={{ 
      background: "linear-gradient(135deg, #FFE5B4, #FFB84D)", 
      minHeight: "100vh", 
      padding: "20px" 
    }}>
      <h2>Earnings</h2>
      {loading ? (
        <p>Loading earnings...</p>
      ) : (
        <p>
          Your current earnings: <strong>${earnings.toFixed(2)}</strong>
        </p>
      )}
    </div>
  );
}
