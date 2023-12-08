import "./PlayersModalStatistics.css";
function PlayersModalStatistics({ stats }) {
  let leagueDisplay = "";
  leagueDisplay = stats.league.name;
  if (stats.league.name === "UEFA Champions League")
    leagueDisplay = "Champions League";
  if (stats.league.name === "Friendlies Clubs")
    leagueDisplay = "Club Friendlies";

  if (!stats) return;
  return (
    <>
      <h3 className="players-modal-stats-heading">
        Player Statistics - {leagueDisplay}
      </h3>
      <div className="players-modal-stats">
        <div className="players-modal-stats-overall">
          <p>Participation</p>
          <span>Appearances: {stats.games.appearences || "0"}</span>
          <span>Minutes: {stats.games.minutes || "0"}&apos;</span>
        </div>

        <div className="players-modal-stats-goals">
          <p>Goals</p>
          {stats.games.position === "Goalkeeper" && (
            <>
              <span>Conceded: {stats.goals.conceded || "0"}</span>
              <span>Saves: {stats.goals.saves || "0"}</span>
            </>
          )}
          {stats.games.position !== "Goalkeeper" && (
            <>
              <span>Total: {stats.goals.total || "0"}</span>
              <span>Assists: {stats.goals.assists || "0"}</span>
            </>
          )}
        </div>

        {stats.games.position !== "Goalkeeper" && (
          <>
            <div className="players-modal-stats-shots">
              <p>Shots</p>
              <span>On target: {stats.shots.on || "0"}</span>
              <span>Total: {stats.shots.total || "0"}</span>
            </div>
          </>
        )}

        <div className="players-modal-stats-cards">
          <p>Cards</p>
          <span>Yellow: {stats.cards.yellow || "0"}</span>
          <span>Red: {stats.cards.yellowred + stats.cards.red || "0"}</span>
        </div>

        {stats.games.position !== "Goalkeeper" && (
          <div className="players-modal-stats-tackles">
            <p>Tackles</p>
            <span>Blocks: {stats.tackles.blocks || "0"}</span>
            <span>Interceptions: {stats.tackles.interceptions || "0"}</span>
            <span>Total: {stats.tackles.total || "0"}</span>
          </div>
        )}

        <div className="players-modal-stats-duels">
          <p>Duels</p>
          <span>Total: {stats.duels.total || "0"}</span>
          <span>Won: {stats.duels.won || "0"}</span>
        </div>

        {stats.games.position !== "Goalkeeper" && (
          <div className="players-modal-stats-dribbles">
            <p>Dribbles</p>
            <span>Attempts: {stats.dribbles.attempts || "0"}</span>
            <span>Successful: {stats.dribbles.success || "0"}</span>
          </div>
        )}

        <div className="players-modal-stats-fouls">
          <p>Fouls</p>
          <span>Committed: {stats.fouls.committed || "0"}</span>
          <span>Drawn: {stats.fouls.drawn || "0"}</span>
        </div>

        <div className="players-modal-stats-passes">
          <p>Passes</p>
          {stats.games.position !== "Goalkeeper" &&
            stats.passes.key !== null && (
              <span>Key passes: {stats.passes.key}</span>
            )}
          <span>
            Total: {stats.passes.total ? stats.passes.total : ""}
            {!stats.passes.total &&
              (stats.games.appearences === 0 ? "0" : "No info")}
          </span>
        </div>
      </div>
    </>
  );
}

export default PlayersModalStatistics;
