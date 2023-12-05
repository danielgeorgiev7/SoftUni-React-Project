import getJerseyColor from "../../../utils/getJerseyColor";
import AllStats from "./AllStats";
import "./Statistics.css";
function Statistics({ fixture }) {
  if (fixture === null) return;

  if (fixture.statistics.length === 0) {
    return (
      <p className="no-statistics-available">
        Sorry, there are no statistics available for this fixture.
      </p>
    );
  }

  const realStats = fixture.statistics.filter((each) => each.team.id === 541)[
    "0"
  ];
  const otherStats = fixture.statistics.filter((each) => each.team.id !== 541)[
    "0"
  ];
  const otherTeamName = Object.values(fixture.teams).filter(
    (team) => team.id !== 541
  )["0"].name;
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
          <p style={{ color: getJerseyColor(otherTeamName) }}>
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
            otherTeamName={otherTeamName}
            key={`${stat.type.split(" ").join("-").toLowerCase()}-bg`}
          />
        ))}
      </div>
    </>
  );
}

export default Statistics;
