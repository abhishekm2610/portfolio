import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EducationFloor() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      {loading ? <h2>🛗 Moving to Floor 2...</h2> : (
        <>
          <h1>Education</h1>
          <h2>🎓 Purdue University</h2>
          <p>MS in Computer and Information Technology (2024–2026) — GPA: 4.0</p>
          <ul><li>Cloud Infrastructure, HCI, DC Networks</li></ul>
          <h2>🎓 Anna University, India</h2>
          <p>B.Eng in Computer Science (2016–2020) — CGPA: 8.28</p>
          <ul><li>Programming, Algorithms, Software Engineering</li></ul>
          <button onClick={() => navigate('/')}>Back to Lobby</button>
        </>
      )}
    </div>
  );
}
