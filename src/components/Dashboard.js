import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

// Import pages from the Dashboard folder
import Home from './Dashboard/Home';
import Tasks from './Dashboard/Tasks';
import Earnings from './Dashboard/Earnings';
import Profile from './Dashboard/Profile';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
      } else {
        setUser(user);
      }
    };
    getUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div style={{ backgroundColor: '#FFF3E0', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#FF8C00' }}>Dashboard</h1>
      {user && <p style={{ textAlign: 'center' }}>Welcome, {user.email}</p>}

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button onClick={() => setActiveTab('home')} style={{ margin: '0 10px' }}>Home</button>
        <button onClick={() => setActiveTab('tasks')} style={{ margin: '0 10px' }}>Tasks</button>
        <button onClick={() => setActiveTab('earnings')} style={{ margin: '0 10px' }}>Earnings</button>
        <button onClick={() => setActiveTab('profile')} style={{ margin: '0 10px' }}>Profile</button>
        <button onClick={handleLogout} style={{ margin: '0 10px', color: 'red' }}>Logout</button>
      </div>

      {/* Dynamic Content */}
      <div style={{ marginTop: '20px' }}>
        {activeTab === 'home' && <Home />}
        {activeTab === 'tasks' && <Tasks />}
        {activeTab === 'earnings' && <Earnings />}
        {activeTab === 'profile' && <Profile user={user} />}
      </div>
    </div>
  );
}
