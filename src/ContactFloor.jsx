import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ContactFloor() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      {loading ? <h2>🛗 Moving to Floor 5...</h2> : (
        <>
          <h1>Contact Me</h1>
          <p>Email: <a href="mailto:muthukua@purdue.edu">muthukua@purdue.edu</a></p>
          <p>GitHub: <a href="https://github.com/abhishekm2610" target="_blank">github.com/abhishekm2610</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/abhishekm2610" target="_blank">linkedin.com/in/abhishekm2610</a></p>

          <button onClick={() => navigate('/')}>Back to Lobby</button>
        </>
      )}
    </div>
  );
}
