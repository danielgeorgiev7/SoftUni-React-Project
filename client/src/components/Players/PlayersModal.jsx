import { useEffect } from "react";
import "./PlayersModal.css";
import formatBirthday from "../../utils/BirthdayFormatting";
import PlayersModalButton from "./Modal/PlayersModalButton";
import PlayersModalStatistics from "./Modal/PlayersModalStatistics";
function PlayersModal({
  player,
  modalOpen,
  outOfModalHandle,
  playerId,
  playerPosition,
  buttonClicked,
  setButtonClicked,
}) {
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

  if (!player) return;

  return (
    <>
      <div
        className={modalOpen ? "modal-outside-blur" : "hidden"}
        onClick={outOfModalHandle}
      ></div>

      <div className={`modal-wrapper${!modalOpen ? " hidden" : ""}`}>
        <div
          className={`modal players-modal-martop-${
            playerPosition === "Goalkeeper" ? "full" : "half"
          }`}
        >
          <div className="modal-content">
            <a className="x-button" onClick={outOfModalHandle}>
              ×
            </a>
            <div className="players-modal">
              <img
                src={player["0"].player.photo}
                alt={`${player["0"].player.name} Photo`}
              />
              <div className="players-modal-info">
                <h3>
                  {player["0"].player.firstname} {player["0"].player.lastname}{" "}
                </h3>
                <span className="players-modal-position">{playerPosition}</span>
                <div className="players-modal-info-p-wrapper">
                  <div className="player-modal-info-first-col">
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

                  <div className="player-modal-info-second-col">
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
                      <span>
                        {formatBirthday(player["0"].player.birth.date)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="players-modal-buttons">
              {player["0"].statistics
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
                    player["0"].statistics.filter(
                      (option) => option.league.name === "La Liga"
                    )["0"]
                  }
                />
              )}
              {buttonClicked === "champions-league" && (
                <PlayersModalStatistics
                  key={`${buttonClicked}-statistics-${playerId}`}
                  stats={
                    player["0"].statistics.filter(
                      (option) => option.league.name === "UEFA Champions League"
                    )["0"]
                  }
                />
              )}
              {buttonClicked === "club-friendlies" && (
                <PlayersModalStatistics
                  key={`${buttonClicked}-statistics-${playerId}`}
                  stats={
                    player["0"].statistics.filter(
                      (option) => option.league.name === "Friendlies Clubs"
                    )["0"]
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayersModal;
