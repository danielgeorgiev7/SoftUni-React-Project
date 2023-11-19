// import Stat from "./Stat";
import "./Statistics.css";
function Statistics({ match }) {
  const realStats = match.statistics.filter((each) => each.team.id === 541)[
    "0"
  ];
  const otherStats = match.statistics.filter((each) => each.team.id !== 541)[
    "0"
  ];
  console.log(realStats);
  console.log(otherStats);
  return (
    <div className="statistics">
      {/* {realStats.statistics.map((stat) => (
        <Stat />
      ))} */}
    </div>
  );
}

export default Statistics;
