import './ElevatorDoorOverlay.css';

const ElevatorDoorOverlay = ({ isOpen }) => {
  return (
    <div className={`door-overlay ${isOpen ? 'open' : 'closed'}`}>
      <div className="door left-door" />
      <div className="door right-door" />
    </div>
  );
};

export default ElevatorDoorOverlay;
