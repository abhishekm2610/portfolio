const Lobby = ({ onEnter }) => {
  return (
    <section className="floor-viewport floor-lobby">
      <div className="floor-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the elevator lobby. From here, you can explore all floors.</p>
        <button
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            marginTop: '2rem',
          }}
          onClick={onEnter}
        >
          🚪 Enter Elevator
        </button>
      </div>
    </section>
  );
};

export default Lobby;
