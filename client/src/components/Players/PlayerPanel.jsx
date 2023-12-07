// import { useEffect } from "react";
import { useEffect } from "react";
import "./PlayerPanel.css";
function PlayerPanel({ player, detailsOnClickHandler, setPlayerPositions }) {
  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(function () {
    setPlayerPositions((state) => {
      return {
        ...state,
        [player.id]: player.position,
      };
    });
  }, []);
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
        <a onClick={() => detailsOnClickHandler(player)}>Details</a>
      </div>
    </div>
  );
}

export default PlayerPanel;
