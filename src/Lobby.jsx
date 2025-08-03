import { useNavigate } from 'react-router-dom';

function Lobby() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: 'url("/lobby-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textShadow: '1px 1px 4px #000',
        padding: '2rem',
      }}
    >
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: '2rem',
        borderRadius: '10px',
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center',
        animation: 'contentIn 0.8s ease'
      }}>
        <h1>Welcome to Abhishek's Portfolio</h1>
        <p style={{ marginBottom: '1rem' }}>
          Navigate the floors to view experience, education, projects, and more.
        </p>
        {[1, 2, 3, 4, 5].map(floor => (
          <button key={floor} onClick={() => navigate(`/floor/${floor}`)} style={{ margin: '0.25rem' }}>
            Go to Floor {floor}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Lobby;
