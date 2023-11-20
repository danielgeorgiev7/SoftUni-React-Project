import "./PlayerPanel.css";
function PlayerPanel({ player }) {
  console.log(player);
  return (
    <div className="players-panel">
      <div className="players-panel-img-wrapper">
        <img src={player.photo} alt={`${player.name} Photo`} />
      </div>
      <div className="players-panel-info">
        <h3 className="players-panel-name">
          {player.name} <span>({player.number ? player.number : "-"})</span>
        </h3>
        <p className="players-panel-position">{player.position}</p>
        <p className="players-panel-age">
          Age: <span>{player.age}</span>
        </p>
        <a>Details</a>
      </div>
    </div>
  );
}

export default PlayerPanel;
