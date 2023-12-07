import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import "./PlayersModal.css";
import formatBirthday from "../../utils/BirthdayFormatting";
import PlayersModalButton from "./Modal/PlayersModalButton";
import PlayersModalStatistics from "./Modal/PlayersModalStatistics";
import Loading from "../Loading/Loading";
import FootballContext from "../../contexts/footballContext";
/* eslint-disable react-hooks/exhaustive-deps */

function PlayersModal({
  outOfModalHandle,
  playerPositions,
  buttonClicked,
  setButtonClicked,
}) {
  const { id } = useParams();
  const { getCurrentPlayer, currentPlayer } = useContext(FootballContext);
  const isLoaded = Number(id) === currentPlayer?.player.id;
  const playerId = currentPlayer?.player.id;
  useEffect(
    function () {
      document.body.classList.add("no-scroll");
      getCurrentPlayer(id);

      return () => {
        document.body.classList.remove("no-scroll");
      };
    },
    [id]
  );

  return (
    <>
      <div className="modal-outside-blur" onClick={outOfModalHandle}></div>

      <div className="modal-wrapper">
        <div
          className={`modal players-modal-martop-${
            playerPositions[id] === "Goalkeeper"
              ? "full loading-gk"
              : "half loading-player"
          }`}
        >
          <div className="modal-content">
            <a className="x-button" onClick={outOfModalHandle}>
              ×
            </a>
            {!isLoaded ? (
              <Loading />
            ) : (
              <>
                <div className="players-modal">
                  <img
                    src={currentPlayer.player.photo}
                    alt={`${currentPlayer.player.name} Photo`}
                  />
                  <div className="players-modal-info">
                    <h3>
                      {currentPlayer.player.firstname}{" "}
                      {currentPlayer.player.lastname}{" "}
                    </h3>
                    <span className="players-modal-position">
                      {playerPositions[id]}
                    </span>
                    <div className="players-modal-info-p-wrapper">
                      <div className="player-modal-info-first-col">
                        <p className="players-modal-height">
                          Height: {currentPlayer.player.height}
                        </p>
                        <p className="players-modal-height">
                          Weight: {currentPlayer.player.weight}
                        </p>
                        <p className="players-modal-age">
                          Age: <span>{currentPlayer.player.age}</span>
                        </p>
                      </div>

                      <div className="player-modal-info-second-col">
                        <p className="players-modal-nationality">
                          Nationality:{" "}
                          <span>{currentPlayer.player.nationality}</span>
                        </p>
                        <p className="players-modal-birthplace">
                          Birthplace:{" "}
                          <span>{currentPlayer.player.birth.place}</span>
                          {currentPlayer.player.birth.place ? "," : ""}{" "}
                          <span>{currentPlayer.player.birth.country}</span>
                        </p>
                        <p className="players-modal-born">
                          Born:{" "}
                          <span>
                            {formatBirthday(currentPlayer.player.birth.date)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="players-modal-buttons">
                  {currentPlayer.statistics
                    .filter((option) => option.team.id === 541)
                    .reduce((acc, option) => {
                      const leagueName = option.league.name;

                      if (
                        acc.filter((each) => each.league.name === leagueName)
                          .length === 0
                      ) {
                        acc.push(option);
                      }
                      return acc;
                    }, [])
                    .map((option, index) => (
                      <PlayersModalButton
                        buttonClicked={buttonClicked}
                        setButtonClicked={setButtonClicked}
                        option={option}
                        key={`players-modal-option-${playerId}-${index}`}
                      />
                    ))}
                </div>
                <div className="players-modal-sections">
                  {buttonClicked === "la-liga" && (
                    <PlayersModalStatistics
                      key={`${buttonClicked}-statistics-${playerId}`}
                      stats={
                        currentPlayer.statistics.filter(
                          (option) => option.league.name === "La Liga"
                        )["0"]
                      }
                    />
                  )}
                  {buttonClicked === "champions-league" && (
                    <PlayersModalStatistics
                      key={`${buttonClicked}-statistics-${playerId}`}
                      stats={
                        currentPlayer.statistics.filter(
                          (option) =>
                            option.league.name === "UEFA Champions League"
                        )["0"]
                      }
                    />
                  )}
                  {buttonClicked === "club-friendlies" && (
                    <PlayersModalStatistics
                      key={`${buttonClicked}-statistics-${playerId}`}
                      stats={
                        currentPlayer.statistics.filter(
                          (option) => option.league.name === "Friendlies Clubs"
                        )["0"]
                      }
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayersModal;
