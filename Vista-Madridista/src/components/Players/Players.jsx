import PlayersModal from "./PlayersModal";
import PlayerPanel from "./PlayerPanel";
import "./Players.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function Players() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPlayerId, setCurrentPlayerId] = useState(null);
  const [currentPlayerPosition, setCurrentPlayerPosition] = useState(null);
  const [buttonClicked, setButtonClicked] = useState("la-liga");

  const navigate = useNavigate();
  const playersInfo = [
    {
      team: {
        id: 541,
        name: "Real Madrid",
        logo: "https://media-4.api-sports.io/football/teams/541.png",
      },
      players: [
        {
          id: 730,
          name: "T. Courtois",
          age: 31,
          number: 1,
          position: "Goalkeeper",
          photo: "https://media-4.api-sports.io/football/players/730.png",
        },
        {
          id: 47400,
          name: "A. Lunin",
          age: 24,
          number: 13,
          position: "Goalkeeper",
          photo: "https://media-4.api-sports.io/football/players/47400.png",
        },
        {
          id: 2273,
          name: "Kepa",
          age: 29,
          number: 25,
          position: "Goalkeeper",
          photo: "https://media-4.api-sports.io/football/players/2273.png",
        },
        {
          id: 334575,
          name: "Diego Piñeiro",
          age: 19,
          number: 26,
          position: "Goalkeeper",
          photo: "https://media-4.api-sports.io/football/players/334575.png",
        },
        {
          id: 396475,
          name: "Fran González",
          age: 18,
          number: 30,
          position: "Goalkeeper",
          photo: "https://media-4.api-sports.io/football/players/396475.png",
        },
        {
          id: 206260,
          name: "Lucas Cañizares",
          age: 21,
          number: 31,
          position: "Goalkeeper",
          photo: "https://media-4.api-sports.io/football/players/206260.png",
        },
        {
          id: 733,
          name: "Dani Carvajal",
          age: 31,
          number: 2,
          position: "Defender",
          photo: "https://media-4.api-sports.io/football/players/733.png",
        },
        {
          id: 372,
          name: "Éder Militão",
          age: 25,
          number: 3,
          position: "Defender",
          photo: "https://media-4.api-sports.io/football/players/372.png",
        },
        {
          id: 505,
          name: "D. Alaba",
          age: 31,
          number: 4,
          position: "Defender",
          photo: "https://media-4.api-sports.io/football/players/505.png",
        },
        {
          id: 735,
          name: "Nacho",
          age: 33,
          number: 6,
          position: "Defender",
          photo: "https://media-4.api-sports.io/football/players/735.png",
        },
        {
          id: 736,
          name: "Fran García",
          age: 24,
          number: 20,
          position: "Defender",
          photo: "https://media-4.api-sports.io/football/players/736.png",
        },
        {
          id: 2285,
          name: "A. Rüdiger",
          age: 30,
          number: 22,
          position: "Defender",
          photo: "https://media-4.api-sports.io/football/players/2285.png",
        },
        {
          id: 653,
          name: "F. Mendy",
          age: 28,
          number: 23,
          position: "Defender",
          photo: "https://media-4.api-sports.io/football/players/653.png",
        },
        {
          id: 237174,
          name: "Álvaro Carrillo",
          age: 21,
          number: 34,
          position: "Defender",
          photo: "https://media-4.api-sports.io/football/players/237174.png",
        },
        {
          id: 336706,
          name: "Marvel",
          age: 20,
          number: null,
          position: "Defender",
          photo: "https://media-4.api-sports.io/football/players/336706.png",
        },
        {
          id: 279792,
          name: "Vinícius Tobias",
          age: 19,
          number: null,
          position: "Defender",
          photo: "https://media-4.api-sports.io/football/players/279792.png",
        },
        {
          id: 129718,
          name: "J. Bellingham",
          age: 20,
          number: 5,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/129718.png",
        },
        {
          id: 752,
          name: "T. Kroos",
          age: 33,
          number: 8,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/752.png",
        },
        {
          id: 754,
          name: "L. Modrić",
          age: 38,
          number: 10,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/754.png",
        },
        {
          id: 2207,
          name: "E. Camavinga",
          age: 21,
          number: 12,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/2207.png",
        },
        {
          id: 756,
          name: "F. Valverde",
          age: 25,
          number: 15,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/756.png",
        },
        {
          id: 757,
          name: "Lucas Vázquez",
          age: 32,
          number: 17,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/757.png",
        },
        {
          id: 1271,
          name: "A. Tchouaméni",
          age: 23,
          number: 18,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/1271.png",
        },
        {
          id: 748,
          name: "Dani Ceballos",
          age: 27,
          number: 19,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/748.png",
        },
        {
          id: 744,
          name: "Brahim Díaz",
          age: 24,
          number: 21,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/744.png",
        },
        {
          id: 291964,
          name: "A. Güler",
          age: 18,
          number: 24,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/291964.png",
        },
        {
          id: 350037,
          name: "N. Paz",
          age: 19,
          number: 32,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/350037.png",
        },
        {
          id: 343205,
          name: "Mario Martín",
          age: 19,
          number: null,
          position: "Midfielder",
          photo: "https://media-4.api-sports.io/football/players/343205.png",
        },
        {
          id: 762,
          name: "Vinícius Júnior",
          age: 23,
          number: 7,
          position: "Attacker",
          photo: "https://media-4.api-sports.io/football/players/762.png",
        },
        {
          id: 10009,
          name: "Rodrygo",
          age: 22,
          number: 11,
          position: "Attacker",
          photo: "https://media-4.api-sports.io/football/players/10009.png",
        },
        {
          id: 18907,
          name: "Joselu",
          age: 33,
          number: 14,
          position: "Attacker",
          photo: "https://media-4.api-sports.io/football/players/18907.png",
        },
        {
          id: 336711,
          name: "Gonzalo García",
          age: 19,
          number: 33,
          position: "Attacker",
          photo: "https://media-4.api-sports.io/football/players/336711.png",
        },
        {
          id: 343202,
          name: "Á. Rodríguez",
          age: 19,
          number: null,
          position: "Attacker",
          photo: "https://media-4.api-sports.io/football/players/343202.png",
        },
      ],
    },
  ];
  let goalkeepers = playersInfo["0"].players.filter(
    (player) => player.position === "Goalkeeper"
  );
  let defenders = playersInfo["0"].players.filter(
    (player) => player.position === "Defender"
  );
  let midfielders = playersInfo["0"].players.filter(
    (player) => player.position === "Midfielder"
  );
  let attackers = playersInfo["0"].players.filter(
    (player) => player.position === "Attacker"
  );

  async function OutOfModalHandle() {
    setModalOpen(false);
  }

  function detailsOnClickHandler(player) {
    setModalOpen(true);
    setCurrentPlayerId(player.id);
    navigate(`/players/${player.id}`);
    setCurrentPlayerPosition(player.position);
  }
  return (
    <>
      <PlayersModal
        playerId={currentPlayerId}
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
