import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ExperienceFloor() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleBack = () => {
    setExiting(true);
    setTimeout(() => navigate('/'), 600);
  };

  const backgroundImage = 'url("/experience-bg.png")'; // Replace with DALL·E background

  if (loading) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', backgroundColor: '#111', animation: 'slideLeft 1s forwards' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', backgroundColor: '#111', animation: 'slideRight 1s forwards' }} />
      </div>
    );
  }

  return (
    <div style={{
      backgroundImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '3rem 1.5rem',
      position: 'relative',
      transition: 'opacity 0.6s ease',
      opacity: exiting ? 0 : 1
    }}>
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: '12px',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '2rem',
        animation: 'contentIn 0.8s ease-out'
      }}>
        <h1>Experience</h1>
         <h2>Veeam – Kasten Engineering Intern</h2>
        <ul>
          <li>Improved backup portability in Kopia</li>
        </ul>
        <h2>Purdue RCAC – Graduate Research Scientist</h2>
        <ul>
          <li>Built Purdue GenAI Studio on Kubernetes</li>
        </ul>
        <h2>Cisco – Software Engineer</h2>
        <ul>
          <li>Built microservices, saved 3000+ hours/quarter</li>
        </ul>
        <button onClick={handleBack}>⬅ Back to Lobby</button>
      </div>
    </div>
  );
}

export default ExperienceFloor;
