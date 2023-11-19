import AllStats from "./AllStats";
import "./Statistics.css";
function Statistics({ match }) {
  const realStats = match.statistics.filter((each) => each.team.id === 541)[
    "0"
  ];
  const otherStats = match.statistics.filter((each) => each.team.id !== 541)[
    "0"
  ];
  console.log(match);
  return (
    <>
      <div className="stats-sides">
        <div className="real-stats-side">
          <img
            src={
              match.teams.home.id === 541
                ? match.teams.home.logo
                : match.teams.away.logo
            }
            alt="Real Madrid Logo"
          />
          <p>
            {match.teams.home.id === 541
              ? match.teams.home.name
              : match.teams.away.name}
          </p>
        </div>
        <div className="other-stats-side">
          <p>
            {match.teams.home.id !== 541
              ? match.teams.home.name
              : match.teams.away.name}
          </p>
          <img
            src={
              match.teams.home.id !== 541
                ? match.teams.home.logo
                : match.teams.away.logo
            }
            alt={`${
              match.teams.home.id !== 541
                ? match.teams.home.name
                : match.teams.away.name
            } Logo`}
          />
        </div>
      </div>
      <div className="statistics">
        {realStats.statistics.map((stat) => (
          <AllStats
            stat={stat}
            realStats={realStats}
            otherStats={otherStats}
            key={`${stat.type.split(" ").join("-").toLowerCase()}-bg`}
          />
        ))}
      </div>
    </>
  );
}

export default Statistics;
