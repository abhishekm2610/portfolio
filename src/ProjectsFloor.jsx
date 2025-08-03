import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProjectsFloor() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      {loading ? <h2>🛗 Moving to Floor 3...</h2> : (
        <>
          <h1>Projects</h1>

          <h2>📊 Network Dashboard</h2>
          <p>Real-time visualization of traffic flows — used by 30+ Cisco customers.</p>

          <h2>🔄 Service Migration Automation</h2>
          <p>Designed Ansible engine & dashboard for network orchestration.</p>

          <h2>📱 Smart Alarm System</h2>
          <p>Triggered alarms via SMS for remote sensing products.</p>

          <button onClick={() => navigate('/')}>Back to Lobby</button>
        </>
      )}
    </div>
  );
}
