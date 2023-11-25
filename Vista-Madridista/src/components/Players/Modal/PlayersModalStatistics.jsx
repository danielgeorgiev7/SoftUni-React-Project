import "./PlayersModalStatistics.css";
function PlayersModalStatistics({ stats }) {
  console.log(stats);
  return <div>{stats.league.name}</div>;
}

export default PlayersModalStatistics;
