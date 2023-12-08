import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import PlayersModal from "./PlayersModal";
import PlayerPanel from "./PlayerPanel";
import FootballContext from "../../contexts/footballContext";
import Loading from "../Loading/Loading";
import "./Players.css";

function Players() {
  const [buttonClicked, setButtonClicked] = useState("la-liga");
  const { players } = useContext(FootballContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [playerPositions, setPlayerPositions] = useState({});
  const isModalHidden =
    location.pathname.split("/")[2] === "" ||
    location.pathname.split("/")[2] === undefined;

  if (typeof players === "string")
    return <p className="error-placeholder main-error">{players}</p>;
  if (!players) return <Loading />;

  let goalkeepers = players["0"].players.filter(
    (player) => player.position === "Goalkeeper"
  );
  let defenders = players["0"].players.filter(
    (player) => player.position === "Defender"
  );
  let midfielders = players["0"].players.filter(
    (player) => player.position === "Midfielder"
  );
  let attackers = players["0"].players.filter(
    (player) => player.position === "Attacker"
  );

  async function OutOfModalHandle() {
    navigate("/players");
  }

  async function detailsOnClickHandler(player) {
    navigate(`/players/${player.id}`);
  }
  return (
    <>
      {!isModalHidden && (
        <PlayersModal
          outOfModalHandle={OutOfModalHandle}
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
          playerPositions={playerPositions}
        ></PlayersModal>
      )}

      <div className="players">
        <h2 className="players-heading">Goalkeepers</h2>
        <div className="players-panel-wrapper">
          {goalkeepers.map((goalkeeper) => (
            <PlayerPanel
              player={goalkeeper}
              key={`players-panel-${goalkeeper.id}`}
              detailsOnClickHandler={detailsOnClickHandler}
              setPlayerPositions={setPlayerPositions}
            />
          ))}
        </div>
        <h2 className="players-heading">Defenders</h2>
        <div className="players-panel-wrapper">
          {defenders.map((defender) => (
            <PlayerPanel
              player={defender}
              key={`players-panel-${defender.id}`}
              detailsOnClickHandler={detailsOnClickHandler}
              setPlayerPositions={setPlayerPositions}
            />
          ))}
        </div>
        <h2 className="players-heading">Midfielders</h2>
        <div className="players-panel-wrapper">
          {midfielders.map((midfielder) => (
            <PlayerPanel
              player={midfielder}
              key={`players-panel-${midfielder.id}`}
              detailsOnClickHandler={detailsOnClickHandler}
              setPlayerPositions={setPlayerPositions}
            />
          ))}
        </div>
        <h2 className="players-heading">Attackers</h2>
        <div className="players-panel-wrapper">
          {attackers.map((attacker) => (
            <PlayerPanel
              player={attacker}
              key={`players-panel-${attacker.id}`}
              detailsOnClickHandler={detailsOnClickHandler}
              setPlayerPositions={setPlayerPositions}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Players;
