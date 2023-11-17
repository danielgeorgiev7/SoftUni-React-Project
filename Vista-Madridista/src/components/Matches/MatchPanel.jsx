import "./matchPanel.css";
import { formatDate, checkSameMonth } from "../../utils/DateFormatting";
function MatchPanel({ match, detailsBtnClickHandler }) {
  if (match.fixture.id === 1097382) {
    // console.log(match);
    return;
  }
  let display1 = null;
  let display2 = null;
  if (match.league.name === "UEFA Champions League") {
    [display1, display2] = match.league.round.split(" - ");
    display1 = " - " + display1;
    display2 = " - " + display2 + " of 6";
  }
  if (match.league.name === "La Liga") {
    display1 = " - Round ";
    display2 = match.league.round.split(" - ")[1];
  }
  if (match.league.name === "Friendlies Clubs") {
    display1 = "Club Friendlies";
    display2 = "";
  }
  const isInSameMonth = checkSameMonth(match.fixture.date);
  const [weekday, date, time] = formatDate(match.fixture.date).split(",");

  return (
    <li
      className={`match-panel ${
        match.fixture.status.short.toLowerCase() === "ft" ? "ft" : ""
      }`}
    >
      <div className="info">
        <p>
          {display1 !== "Club Friendlies" &&
            display2 !== "" &&
            match.league.name}
          {display1 !== null && display2 !== null
            ? display1 + display2
            : " - " + match.league.round}
        </p>
      </div>
      <div className="results">
        <div className="teams">
          <div
            className={`home-team ${
              match.teams.home.id === 541 ? "real-blue" : ""
            } ${match.teams.home.winner ? "winner" : "loser"}`}
          >
            <img src={match.teams.home.logo} alt="Home team logo" />
            <p>{match.teams.home.name}</p>
            <div className="stats">{match.goals.home}</div>
          </div>

          <div
            className={`away-team ${
              match.teams.away.id === 541 ? "real-blue" : ""
            } ${match.teams.away.winner ? "winner" : "loser"}`}
          >
            <img src={match.teams.away.logo} alt="Away team logo" />
            <p>{match.teams.away.name}</p>
            <div className="stats">{match.goals.away}</div>
          </div>
        </div>
        <div className="time">
          {match.fixture.status.short.toLowerCase() === "ft" && (
            <>
              <p className="ft-spacing">Full-time</p>
              <p className="ft-grey">
                {weekday + ", "}
                {date}
              </p>
            </>
          )}{" "}
          {match.fixture.status.short.toLowerCase() !== "ft" && (
            <>
              <p>
                {isInSameMonth && weekday + ", "}
                {date}
              </p>

              {match.fixture.status.short.toLowerCase() === "tbd" ? (
                <p className="tbd-grey">TBD</p>
              ) : (
                <p>{time}</p>
              )}
            </>
          )}{" "}
          <button
            className="details-btn"
            onClick={() => detailsBtnClickHandler(match)}
          >
            Details
          </button>
        </div>
      </div>
    </li>
  );
}

export default MatchPanel;
