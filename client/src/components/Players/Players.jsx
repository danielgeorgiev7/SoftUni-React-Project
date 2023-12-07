import PlayersModal from "./PlayersModal";
import PlayerPanel from "./PlayerPanel";
import "./Players.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import FootballContext from "../../contexts/footballContext";
import { getPlayer } from "../../services/footballAPI";
import Loading from "../Loading/Loading";

function Players() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [currentPlayerPosition, setCurrentPlayerPosition] = useState(null);
  const [buttonClicked, setButtonClicked] = useState("la-liga");
  const navigate = useNavigate();
  const { players } = useContext(FootballContext);
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
    setModalOpen(false);
  }

  async function detailsOnClickHandler(player) {
    const playerResult = await getPlayer(player.id);
    setModalOpen(true);
    setCurrentPlayer(playerResult);
    navigate(`/players/${player.id}`);
    setCurrentPlayerPosition(player.position);
  }
  return (
    <>
      <PlayersModal
        player={currentPlayer}
        modalOpen={modalOpen}
        outOfModalHandle={OutOfModalHandle}
        playerPosition={currentPlayerPosition}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      ></PlayersModal>
      <div className="players">
        <h2 className="players-heading">Goalkeepers</h2>
        <div className="players-panel-wrapper">
          {goalkeepers.map((goalkeeper) => (
            <PlayerPanel
              player={goalkeeper}
              key={`players-panel-${goalkeeper.id}`}
              detailsOnClickHandler={detailsOnClickHandler}
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
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Players;
