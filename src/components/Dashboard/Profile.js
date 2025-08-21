import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0); // default to 0

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);

        // Get balance from database in future, for now keep it 0
        setBalance(0);
      }
    };
    fetchUserData();
  }, []);

  const handleWithdraw = () => {
    alert("Withdrawal feature coming soon!");
  };

  return (
    <div style={{ background: "linear-gradient(135deg, #FFE5B4, #FFB84D)", minHeight: "100vh", padding: "20px" }}>
      <h2>Profile</h2>
      {user ? (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Balance:</strong> ${balance.toFixed(2)}</p>
          <button
            onClick={handleWithdraw}
            style={{
              backgroundColor: "#FF8C00",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Withdraw
          </button>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}
