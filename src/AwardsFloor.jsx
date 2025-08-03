import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AwardsFloor() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      {loading ? <h2>🛗 Moving to Floor 4...</h2> : (
        <>
          <h1>Awards & Recognition</h1>
          <ul>
            <li>🧠 Peer-reviewed paper on On-Prem GenAI at PEARC25</li>
            <li>📢 Represented Purdue RCAC at SC24 in Atlanta</li>
            <li>☁️ Attended KubeCon + CloudNativeCon 2024</li>
            <li>🌍 IEEE YESIST12 MakerFair Winner – Thailand (2019)</li>
            <li>🎖️ CNAP Board Member at Purdue (Aug 2024)</li>
          </ul>

          <button onClick={() => navigate('/')}>Back to Lobby</button>
        </>
      )}
    </div>
  );
}
