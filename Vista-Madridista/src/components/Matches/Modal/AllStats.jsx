import Stat from "./Stat";
import "./Statistics.css";
function AllStats({ stat, realStats, otherStats }) {
  let toCompareReal = realStats.statistics.filter(
    (realStat) => realStat.type === stat.type
  )["0"].value;
  let toCompareOther = otherStats.statistics.filter(
    (realStat) => realStat.type === stat.type
  )["0"].value;
  //   console.log(toCompareReal);
  //   console.log(toCompareOther);
  //   console.log(typeof toCompareReal);
  //   console.log(typeof toCompareOther);

  let realWidth = "";
  let otherWidth = "";
  if (
    toCompareReal > toCompareOther &&
    typeof toCompareReal !== "string" &&
    typeof toCompareOther !== "string"
  ) {
    realWidth = { width: 34 + "rem" };
    otherWidth = {
      width: 30 / (toCompareReal / toCompareOther) + 4 + "rem",
    };
  } else if (
    toCompareOther > toCompareReal &&
    typeof toCompareReal !== "string" &&
    typeof toCompareOther !== "string"
  ) {
    otherWidth = { width: 34 + "rem" };
    realWidth = {
      width: 30 / (toCompareOther / toCompareReal) + 4 + "rem",
    };
  } else if (
    toCompareOther === toCompareReal &&
    typeof toCompareReal !== "string" &&
    typeof toCompareOther !== "string"
  ) {
    realWidth = { width: 25 + "rem" };
    otherWidth = { width: 25 + "rem" };
  }
  if (toCompareOther === null) {
    otherWidth = { width: 4 + "rem" };
    realWidth =
      toCompareReal > 8
        ? { width: 34 + "rem" }
        : { width: toCompareReal * 3.75 + 4 + "rem" };
  }
  if (toCompareReal === null) {
    realWidth = { width: 4 + "rem" };
    otherWidth =
      toCompareOther > 8
        ? { width: 34 + "rem" }
        : { width: toCompareOther * 3.75 + 4 + "rem" };
  }
  if (typeof toCompareReal === "string" && typeof toCompareOther === "string") {
    toCompareReal = toCompareReal.split("%").join("");
    toCompareOther = toCompareOther.split("%").join("");
    realWidth = { width: (Number(toCompareReal) / 100) * 34 + "rem" };
    otherWidth = { width: (Number(toCompareOther) / 100) * 34 + "rem" };
  }

  return (
    <div className="type-of-stat">
      <p>
        {stat.type !== "expected_goals" ? stat.type : null}
        {realStats.statistics.map((realStat, index) => (
          <Stat
            typeStat={realStat}
            stat={stat}
            backgroundClass="bg-left"
            statClass="stat real"
            style={realWidth}
            key={`${stat.type.split(" ").join("-").toLowerCase()}${
              realStats.team.id
            }${index}`}
          />
        ))}
        {otherStats.statistics.map((otherStat, index) => (
          <Stat
            typeStat={otherStat}
            stat={stat}
            backgroundClass="bg-right"
            statClass="stat other"
            style={otherWidth}
            key={`${stat.type.split(" ").join("-").toLowerCase()}${
              otherStats.team.id
            }${index}`}
          />
        ))}
      </p>
    </div>
  );
}

export default AllStats;
