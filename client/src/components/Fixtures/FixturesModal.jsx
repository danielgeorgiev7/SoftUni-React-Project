import { useEffect } from "react";
import { formatDate } from "../../utils/DateFormatting";
import "./FixturesModal.css";
import Summary from "./Modal/Summary";
import Statistics from "./Modal/Statistics";
import Squads from "./Modal/Squads";

export function FixturesModal({
  fixture,
  modalOpen,
  outOfModalHandle,
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

  if (fixture === null) return;

  const homeLineups = fixture.lineups["0"];
  const awayLineups = fixture.lineups["1"];

  const date = formatDate(fixture.fixture.date);
  let display1 = null;
  let display2 = null;
  if (fixture.league.name === "UEFA Champions League") {
    [display1, display2] = fixture.league.round.split(" - ");
    display1 = " - " + display1;
    display2 = " - " + display2 + " of 6";
  }
  if (fixture.league.name === "La Liga") {
    display1 = " - Round ";
    display2 = fixture.league.round.split(" - ")[1];
  }
  if (fixture.league.name === "Friendlies Clubs") {
    display1 = "Club Friendlies";
    display2 = "";
  }

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
            <img
              src={
                (fixture.fixture.id === 1030303 &&
                  "/rose-bowl-california.jpg") ||
                (fixture.fixture.id === 1030312 && "/nrg-stadium-texas.jpg") ||
                (fixture.fixture.id === 1030323 &&
                  "/camping-stadium-florida.jpg") ||
                (fixture.fixture.id === 1117081 && "/att-stadium-texas.jpg") ||
                "/" +
                  fixture.teams.home.name.toLowerCase().split(" ").join("-") +
                  ".jpg"
              }
              alt={`${fixture.teams.home.name} stadium`}
              className={`stadium-img ${
                buttonClicked === "summary" ? "stadium-img-fix" : ""
              }`}
            />
            <div className="fixtures-modal-venue">
              <p>
                <span>Venue: </span>
                {fixture.fixture.venue.name}, {fixture.fixture.venue.city}
              </p>
            </div>
            <div className="fixtures-modal-upper-info">
              <div className="span-holder">
                <span>
                  {display1 !== "Club Friendlies" &&
                    display2 !== "" &&
                    fixture.league.name}
                  {display1 !== null && display2 !== null
                    ? display1 + display2
                    : " - " + fixture.league.round}
                </span>
                <p>
                  <span>Referee: </span>
                  {fixture.fixture.referee
                    ? fixture.fixture.referee
                    : "Not Stated"}
                </p>
              </div>
              {fixture.fixture.status.short === "TBD" ? (
                fixture.fixture.status.long
              ) : (
                <span>{date}</span>
              )}
            </div>
            <div className="fixtures-modal-teams">
              <div
                className={`fixtures-modal-home-team ${
                  fixture.teams.home.id === 541 && "real-blue"
                } ${fixture.teams.home.winner ? "winner" : "loser"}`}
              >
                <p className="fixtures-modal-home-name">
                  {fixture.teams.home.name}
                </p>
                <img src={fixture.teams.home.logo} alt="Home team logo" />
                <span>{fixture.goals.home} </span>
              </div>
              <span>—</span>
              <div
                className={`fixtures-modal-away-team ${
                  fixture.teams.away.id === 541 && "real-blue"
                } ${fixture.teams.away.winner ? "winner" : "loser"}`}
              >
                <span>{fixture.goals.away} </span>
                <img src={fixture.teams.away.logo} alt="Away team logo" />
                <p className="fixtures-modal-away-name">
                  {fixture.teams.away.name}
                </p>
              </div>
            </div>
            <div className="more-info">
              <p>
                {fixture.fixture.status.short !== "TBD"
                  ? fixture.fixture.status.long
                  : ""}
              </p>
            </div>
            {fixture.fixture.status.short.toLowerCase() === "ft" && (
              <div className="fixtures-modal-buttons">
                <button
                  className={buttonClicked === "summary" ? "isActive" : ""}
                  onClick={() => setButtonClicked("summary")}
                >
                  Summary
                </button>
                <button
                  className={buttonClicked === "stats" ? "isActive" : ""}
                  onClick={() => setButtonClicked("stats")}
                >
                  Statistics
                </button>
                <button
                  className={buttonClicked === "squads" ? "isActive" : ""}
                  onClick={() => setButtonClicked("squads")}
                >
                  Squads
                </button>
              </div>
            )}
            {buttonClicked === "summary" &&
              fixture.fixture.status.short === "FT" && (
                <Summary
                  fixture={fixture}
                  homeLineups={homeLineups}
                  awayLineups={awayLineups}
                />
              )}
            {buttonClicked === "stats" &&
              fixture.fixture.status.short === "FT" && (
                <Statistics fixture={fixture} />
              )}
            {buttonClicked === "squads" &&
              fixture.fixture.status.short === "FT" && (
                <Squads
                  fixture={fixture}
                  homeLineups={homeLineups}
                  awayLineups={awayLineups}
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FixturesModal;
