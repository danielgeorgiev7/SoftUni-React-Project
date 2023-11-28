import AllStats from "./AllStats";
import "./Statistics.css";
function Statistics({ fixture }) {
  const realStats = fixture.statistics.filter((each) => each.team.id === 541)[
    "0"
  ];
  const otherStats = fixture.statistics.filter((each) => each.team.id !== 541)[
    "0"
  ];
  console.log(fixture);
  return (
    <>
      <div className="stats-sides">
        <div className="real-stats-side">
          <img
            src={
              fixture.teams.home.id === 541
                ? fixture.teams.home.logo
                : fixture.teams.away.logo
            }
            alt="Real Madrid Logo"
          />
          <p>
            {fixture.teams.home.id === 541
              ? fixture.teams.home.name
              : fixture.teams.away.name}
          </p>
        </div>
        <div className="other-stats-side">
          <p>
            {fixture.teams.home.id !== 541
              ? fixture.teams.home.name
              : fixture.teams.away.name}
          </p>
          <img
            src={
              fixture.teams.home.id !== 541
                ? fixture.teams.home.logo
                : fixture.teams.away.logo
            }
            alt={`${
              fixture.teams.home.id !== 541
                ? fixture.teams.home.name
                : fixture.teams.away.name
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