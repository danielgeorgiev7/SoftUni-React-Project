import "./Summary.css";
import SummaryItem from "./SummaryItem";
function Summary({ match }) {
  if (!match) return;
  console.log(match);
  const homeId = match.teams.home.id;
  let scoreForSummary = { home: 0, away: 0 };

  const eventsFirstHalf = match.events.filter(
    (event) => event.time.elapsed <= 45
  );
  const eventsSecondHalf = match.events.filter(
    (event) => event.time.elapsed > 45
  );
  console.log(eventsFirstHalf);
  return (
    <div className="summary">
      <div className="first-half">
        <p className="half-text">First Half</p>
        {eventsFirstHalf.map(function (event) {
          if (event.type === "Goal" && homeId === event.team.id) {
            scoreForSummary = {
              home: scoreForSummary.home + 1,
              away: scoreForSummary.away,
            };
          } else if (event.type === "Goal" && homeId !== event.team.id) {
            scoreForSummary = {
              home: scoreForSummary.home,
              away: scoreForSummary.away + 1,
            };
          }
          return (
            <SummaryItem
              event={event}
              homeId={homeId}
              key={`${event.time.elapsed}-${event.player.id}-${event.type}`}
              scoreForSummary={scoreForSummary}
            />
          );
        })}
      </div>
      <div className="second-half">
        <p className="half-text">Second Half</p>
        {eventsSecondHalf.map(function (event) {
          if (event.type === "Goal" && homeId === event.team.id) {
            scoreForSummary = {
              home: scoreForSummary.home + 1,
              away: scoreForSummary.away,
            };
          } else if (event.type === "Goal" && homeId !== event.team.id) {
            scoreForSummary = {
              home: scoreForSummary.home,
              away: scoreForSummary.away + 1,
            };
          }
          return (
            <SummaryItem
              event={event}
              homeId={homeId}
              key={`${event.time.elapsed}-${event.player.id}-${event.type}`}
              scoreForSummary={scoreForSummary}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Summary;
