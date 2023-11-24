import { useEffect } from "react";
import "./PlayersModal.css";
import formatBirthday from "../../utils/BirthdayFormatting";
function PlayersModal({ modalOpen, outOfModalHandle, playerId }) {
  const player = [
    {
      player: {
        id: 730,
        name: "T. Courtois",
        firstname: "Thibaut Nicolas Marc",
        lastname: "Courtois",
        age: 31,
        birth: {
          date: "1992-05-11",
          place: "Bree",
          country: "Belgium",
        },
        nationality: "Belgium",
        height: "200 cm",
        weight: "96 kg",
        injured: false,
        photo: "https://media-4.api-sports.io/football/players/730.png",
      },
      statistics: [
        {
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
          },
          league: {
            id: 140,
            name: "La Liga",
            country: "Spain",
            logo: "https://media-4.api-sports.io/football/leagues/140.png",
            flag: "https://media-4.api-sports.io/flags/es.svg",
            season: 2023,
          },
          games: {
            appearences: 0,
            lineups: 0,
            minutes: 0,
            number: null,
            position: "Goalkeeper",
            rating: null,
            captain: false,
          },
          substitutes: {
            in: 0,
            out: 0,
            bench: 0,
          },
          shots: {
            total: null,
            on: null,
          },
          goals: {
            total: 0,
            conceded: null,
            assists: null,
            saves: null,
          },
          passes: {
            total: null,
            key: null,
            accuracy: null,
          },
          tackles: {
            total: null,
            blocks: null,
            interceptions: null,
          },
          duels: {
            total: null,
            won: null,
          },
          dribbles: {
            attempts: null,
            success: null,
            past: null,
          },
          fouls: {
            drawn: null,
            committed: null,
          },
          cards: {
            yellow: 0,
            yellowred: 0,
            red: 0,
          },
          penalty: {
            won: null,
            commited: null,
            scored: null,
            missed: null,
            saved: null,
          },
        },
        {
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
          },
          league: {
            id: 2,
            name: "UEFA Champions League",
            country: "World",
            logo: "https://media-4.api-sports.io/football/leagues/2.png",
            flag: null,
            season: 2023,
          },
          games: {
            appearences: 0,
            lineups: 0,
            minutes: 0,
            number: null,
            position: "Goalkeeper",
            rating: null,
            captain: false,
          },
          substitutes: {
            in: 0,
            out: 0,
            bench: 0,
          },
          shots: {
            total: null,
            on: null,
          },
          goals: {
            total: 0,
            conceded: null,
            assists: null,
            saves: null,
          },
          passes: {
            total: null,
            key: null,
            accuracy: null,
          },
          tackles: {
            total: null,
            blocks: null,
            interceptions: null,
          },
          duels: {
            total: null,
            won: null,
          },
          dribbles: {
            attempts: null,
            success: null,
            past: null,
          },
          fouls: {
            drawn: null,
            committed: null,
          },
          cards: {
            yellow: 0,
            yellowred: 0,
            red: 0,
          },
          penalty: {
            won: null,
            commited: null,
            scored: null,
            missed: null,
            saved: null,
          },
        },
        {
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
          },
          league: {
            id: 667,
            name: "Friendlies Clubs",
            country: "World",
            logo: "https://media-4.api-sports.io/football/leagues/667.png",
            flag: null,
            season: 2023,
          },
          games: {
            appearences: 2,
            lineups: 2,
            minutes: 180,
            number: null,
            position: "Goalkeeper",
            rating: null,
            captain: false,
          },
          substitutes: {
            in: 0,
            out: 0,
            bench: 2,
          },
          shots: {
            total: null,
            on: null,
          },
          goals: {
            total: 0,
            conceded: null,
            assists: null,
            saves: null,
          },
          passes: {
            total: null,
            key: null,
            accuracy: null,
          },
          tackles: {
            total: null,
            blocks: null,
            interceptions: null,
          },
          duels: {
            total: null,
            won: null,
          },
          dribbles: {
            attempts: null,
            success: null,
            past: null,
          },
          fouls: {
            drawn: null,
            committed: null,
          },
          cards: {
            yellow: 0,
            yellowred: 0,
            red: 0,
          },
          penalty: {
            won: null,
            commited: null,
            scored: null,
            missed: null,
            saved: null,
          },
        },
        {
          team: {
            id: 1,
            name: "Belgium",
            logo: "https://media-4.api-sports.io/football/teams/1.png",
          },
          league: {
            id: 960,
            name: "Euro Championship - Qualification",
            country: "World",
            logo: "https://media-4.api-sports.io/football/leagues/960.png",
            flag: null,
            season: 2023,
          },
          games: {
            appearences: 2,
            lineups: 2,
            minutes: 180,
            number: null,
            position: "Goalkeeper",
            rating: "7.000000",
            captain: false,
          },
          substitutes: {
            in: 0,
            out: 0,
            bench: 0,
          },
          shots: {
            total: null,
            on: null,
          },
          goals: {
            total: 0,
            conceded: 1,
            assists: null,
            saves: 5,
          },
          passes: {
            total: 56,
            key: null,
            accuracy: 21,
          },
          tackles: {
            total: null,
            blocks: null,
            interceptions: null,
          },
          duels: {
            total: null,
            won: null,
          },
          dribbles: {
            attempts: null,
            success: null,
            past: null,
          },
          fouls: {
            drawn: null,
            committed: null,
          },
          cards: {
            yellow: 0,
            yellowred: 0,
            red: 0,
          },
          penalty: {
            won: null,
            commited: null,
            scored: 0,
            missed: 0,
            saved: 0,
          },
        },
        {
          team: {
            id: 1,
            name: "Belgium",
            logo: "https://media-4.api-sports.io/football/teams/1.png",
          },
          league: {
            id: 10,
            name: "Friendlies",
            country: "World",
            logo: "https://media-4.api-sports.io/football/leagues/10.png",
            flag: null,
            season: 2023,
          },
          games: {
            appearences: 0,
            lineups: 0,
            minutes: 0,
            number: null,
            position: "Goalkeeper",
            rating: null,
            captain: false,
          },
          substitutes: {
            in: 0,
            out: 0,
            bench: 0,
          },
          shots: {
            total: null,
            on: null,
          },
          goals: {
            total: 0,
            conceded: null,
            assists: null,
            saves: null,
          },
          passes: {
            total: null,
            key: null,
            accuracy: null,
          },
          tackles: {
            total: null,
            blocks: null,
            interceptions: null,
          },
          duels: {
            total: null,
            won: null,
          },
          dribbles: {
            attempts: null,
            success: null,
            past: null,
          },
          fouls: {
            drawn: null,
            committed: null,
          },
          cards: {
            yellow: 0,
            yellowred: 0,
            red: 0,
          },
          penalty: {
            won: null,
            commited: null,
            scored: null,
            missed: null,
            saved: null,
          },
        },
      ],
    },
  ];

  useEffect(
    function () {
      if (modalOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
    [modalOpen]
  );

  if (!playerId) return;

  console.log(player["0"].player);
  console.log(player["0"].statistics);

  return (
    <>
      <div
        className={modalOpen ? "modal-outside-blur" : "hidden"}
        onClick={outOfModalHandle}
      ></div>

      <div className={`modal-wrapper${!modalOpen ? " hidden" : ""}`}>
        <div className="modal">
          <div className="modal-content">
            <a className="x-button" onClick={outOfModalHandle}>
              ×
            </a>
          </div>
          <div className="players-modal">
            <img
              src={player["0"].player.photo}
              alt={`${player["0"].player.name} Photo`}
            />
            <div className="players-modal-info">
              <h3>
                {player["0"].player.firstname} {player["0"].player.lastname}{" "}
              </h3>
              <div className="players-modal-info-p-wrapper">
                <div className="player-modal-info-first-col">
                  <p className="players-modal-nationality">
                    Nationality: <span>{player["0"].player.nationality}</span>
                  </p>
                  <p className="players-modal-birthplace">
                    Birthplace: <span>{player["0"].player.birth.place}</span>
                    {player["0"].player.birth.place ? "," : ""}{" "}
                    <span>{player["0"].player.birth.country}</span>
                  </p>
                  <p className="players-modal-born">
                    Born:{" "}
                    <span>{formatBirthday(player["0"].player.birth.date)}</span>
                  </p>
                </div>
                <div className="player-modal-info-second-col">
                  <p className="players-modal-height">
                    Height: {player["0"].player.height}
                  </p>
                  <p className="players-modal-height">
                    Weight: {player["0"].player.weight}
                  </p>
                  <p className="players-modal-age">
                    Age: <span>{player["0"].player.age}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayersModal;
