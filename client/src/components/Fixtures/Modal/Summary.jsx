import "./Summary.css";
import SummaryItem from "./SummaryItem";
function Summary({ fixture, homeLineups, awayLineups }) {
  if (fixture === null) return;

  const homeId = fixture.teams.home.id;
  let scoreForSummary = { home: 0, away: 0 };

  const eventsFirstHalf = fixture.events.filter(
    (event) => event.time.elapsed <= 45
  );
  const eventsSecondHalf = fixture.events.filter(
    (event) => event.time.elapsed > 45
  );
  return (
    <div className="summary">
      <div className="half">
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
      <div className="half">
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
      <div className="coaches-wrapper">
        <p className="half-text">Coaches</p>
        <div className="coaches">
          <div className="home-coach">
            <img src={homeLineups.coach.photo} alt={homeLineups.coach.name} />
            <div className="coaches-text">
              <p>{homeLineups.coach.name}</p>
              <p>fixture formation:</p>
              <p>{homeLineups.formation}</p>
            </div>
          </div>
          <div className="away-coach">
            <img src={awayLineups.coach.photo} alt={awayLineups.coach.name} />
            <div className="coaches-text">
              <p>{awayLineups.coach.name}</p>
              <p>fixture formation:</p>
              <p>{awayLineups.formation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
