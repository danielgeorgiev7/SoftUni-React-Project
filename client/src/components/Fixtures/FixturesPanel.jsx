import "./FixturesPanel.css";
import { formatDate, checkSameMonth } from "../../utils/DateFormatting";
function FixturesPanel({ fixture, detailsBtnClickHandler }) {
  if (fixture.fixture.id === 1097382) {
    return;
  }

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

  const isInSameMonth = checkSameMonth(fixture.fixture.date);
  const [weekday, date, time] = formatDate(fixture.fixture.date).split(",");

  return (
    <li
      className={`fixture-panel ${
        fixture.fixture.status.short.toLowerCase() === "ft" ? "ft" : ""
      }`}
    >
      <div className="info">
        <p>
          {display1 !== "Club Friendlies" &&
            display2 !== "" &&
            fixture.league.name}
          {display1 !== null && display2 !== null
            ? display1 + display2
            : " - " + fixture.league.round}
        </p>
      </div>
      <div className="results">
        <div className="teams">
          <div
            className={`home-team ${
              fixture.teams.home.id === 541 ? "real-blue" : ""
            } ${fixture.teams.home.winner ? "winner" : "loser"}`}
          >
            <img src={fixture.teams.home.logo} alt="Home team logo" />
            <p>{fixture.teams.home.name}</p>
            <div className="stats">{fixture.goals.home}</div>
          </div>

          <div
            className={`away-team ${
              fixture.teams.away.id === 541 ? "real-blue" : ""
            } ${fixture.teams.away.winner ? "winner" : "loser"}`}
          >
            <img src={fixture.teams.away.logo} alt="Away team logo" />
            <p>{fixture.teams.away.name}</p>
            <div className="stats">{fixture.goals.away}</div>
          </div>
        </div>
        <div className="time">
          {fixture.fixture.status.short.toLowerCase() === "ft" && (
            <>
              <p className="ft-spacing">Full-time</p>
              <p className="ft-grey">
                {weekday + ", "}
                {date}
              </p>
            </>
          )}{" "}
          {fixture.fixture.status.short.toLowerCase() !== "ft" && (
            <>
              <p>
                {isInSameMonth && weekday + ", "}
                {date}
              </p>

              {fixture.fixture.status.short.toLowerCase() === "tbd" ? (
                <p className="tbd-grey">TBD</p>
              ) : (
                <p>{time}</p>
              )}
            </>
          )}{" "}
          <button
            className="details-btn"
            onClick={() => detailsBtnClickHandler(fixture)}
          >
            Details
          </button>
        </div>
      </div>
    </li>
  );
}

export default FixturesPanel;
