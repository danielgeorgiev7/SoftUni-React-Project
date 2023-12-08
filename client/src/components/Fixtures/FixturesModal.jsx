import { useContext, useEffect } from "react";
import { formatDate } from "../../utils/DateFormatting";
import { useParams } from "react-router-dom";
import "./FixturesModal.css";
import Summary from "./Modal/Summary";
import Statistics from "./Modal/Statistics";
import Squads from "./Modal/Squads";
import Loading from "../Loading/Loading";
import FootballContext from "../../contexts/footballContext";
/* eslint-disable react-hooks/exhaustive-deps */

export function FixturesModal({
  outOfModalHandle,
  buttonClicked,
  setButtonClicked,
}) {
  const { id } = useParams();
  const { getCurrentFixture, currentFixture } = useContext(FootballContext);
  const isLoaded = Number(id) === currentFixture?.fixture.id;

  useEffect(function () {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useEffect(
    function () {
      getCurrentFixture(id);
    },
    [id]
  );

  const homeLineups = currentFixture?.lineups["0"];
  const awayLineups = currentFixture?.lineups["1"];

  const date = currentFixture?.fixture.date
    ? formatDate(currentFixture.fixture.date)
    : null;
  let display1 = null;
  let display2 = null;
  if (currentFixture?.league.name === "UEFA Champions League") {
    [display1, display2] = currentFixture.league.round.split(" - ");
    display1 = " - " + display1;
    display2 = " - " + display2 + " of 6";
  }
  if (currentFixture?.league.name === "La Liga") {
    display1 = " - Round ";
    display2 = currentFixture.league.round.split(" - ")[1];
  }
  if (currentFixture?.league.name === "Friendlies Clubs") {
    display1 = "Club Friendlies";
    display2 = "";
  }

  return (
    <>
      <div className={"modal-outside-blur"} onClick={outOfModalHandle}></div>

      <div className={"modal-wrapper"}>
        <div className="modal">
          <div
            className={
              currentFixture?.fixture.status.short === "FT"
                ? "modal-content loading-big"
                : "modal-content loading-small"
            }
          >
            <a className="x-button" onClick={outOfModalHandle}>
              ×
            </a>
            {!isLoaded ? (
              <Loading />
            ) : (
              <>
                <img
                  src={
                    (currentFixture.fixture.id === 1030303 &&
                      "/rose-bowl-california.jpg") ||
                    (currentFixture.fixture.id === 1030312 &&
                      "/nrg-stadium-texas.jpg") ||
                    (currentFixture.fixture.id === 1030323 &&
                      "/camping-stadium-florida.jpg") ||
                    (currentFixture.fixture.id === 1117081 &&
                      "/att-stadium-texas.jpg") ||
                    "/" +
                      currentFixture.teams.home.name
                        .toLowerCase()
                        .split(" ")
                        .join("-") +
                      ".jpg"
                  }
                  alt={`${currentFixture.teams.home.name} stadium`}
                  className={`stadium-img ${
                    buttonClicked === "summary" ? "stadium-img-fix" : ""
                  }`}
                />
                <div className="fixtures-modal-venue">
                  <p>
                    <span>Venue: </span>
                    {currentFixture.fixture.venue.name},{" "}
                    {currentFixture.fixture.venue.city}
                  </p>
                </div>
                <div className="fixtures-modal-upper-info">
                  <div className="span-holder">
                    <span>
                      {display1 !== "Club Friendlies" &&
                        display2 !== "" &&
                        currentFixture.league.name}
                      {display1 !== null && display2 !== null
                        ? display1 + display2
                        : " - " + currentFixture.league.round}
                    </span>
                    <p>
                      <span>Referee: </span>
                      {currentFixture.fixture.referee
                        ? currentFixture.fixture.referee
                        : "Not Stated"}
                    </p>
                  </div>
                  {currentFixture.fixture.status.short === "TBD" ? (
                    currentFixture.fixture.status.long
                  ) : (
                    <span>{date}</span>
                  )}
                </div>
                <div className="fixtures-modal-teams">
                  <div
                    className={`fixtures-modal-home-team ${
                      currentFixture.teams.home.id === 541 && "real-blue"
                    } ${currentFixture.teams.home.winner ? "winner" : "loser"}`}
                  >
                    <p className="fixtures-modal-home-name">
                      {currentFixture.teams.home.name}
                    </p>
                    <img
                      src={currentFixture.teams.home.logo}
                      alt="Home team logo"
                    />
                    <span>{currentFixture.goals.home} </span>
                  </div>
                  <span>—</span>
                  <div
                    className={`fixtures-modal-away-team ${
                      currentFixture.teams.away.id === 541 && "real-blue"
                    } ${currentFixture.teams.away.winner ? "winner" : "loser"}`}
                  >
                    <span>{currentFixture.goals.away} </span>
                    <img
                      src={currentFixture.teams.away.logo}
                      alt="Away team logo"
                    />
                    <p className="fixtures-modal-away-name">
                      {currentFixture.teams.away.name}
                    </p>
                  </div>
                </div>
                <div className="more-info">
                  <p>
                    {currentFixture.fixture.status.short !== "TBD"
                      ? currentFixture.fixture.status.long
                      : ""}
                  </p>
                </div>
                {currentFixture.fixture.status.short.toLowerCase() === "ft" && (
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
                  currentFixture.fixture.status.short === "FT" && (
                    <Summary
                      fixture={currentFixture}
                      homeLineups={homeLineups}
                      awayLineups={awayLineups}
                    />
                  )}
                {buttonClicked === "stats" &&
                  currentFixture.fixture.status.short === "FT" && (
                    <Statistics fixture={currentFixture} />
                  )}
                {buttonClicked === "squads" &&
                  currentFixture.fixture.status.short === "FT" && (
                    <Squads
                      fixture={currentFixture}
                      homeLineups={homeLineups}
                      awayLineups={awayLineups}
                    />
                  )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FixturesModal;
