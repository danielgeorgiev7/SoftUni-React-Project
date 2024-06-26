import { useContext } from "react";
import "./LaLiga.css";
import LaLigaItem from "./LaLigaItem";
import FootballContext from "../../contexts/footballContext";
import Loading from "../Loading/Loading";
function LaLiga() {
  const { laLigaTable } = useContext(FootballContext);

  if (typeof laLigaTable === "string")
    return <p className="error-placeholder main-error">{laLigaTable}</p>;
  if (!laLigaTable) return <Loading />;

  return (
    <div className="standings-container">
      <h2>La Liga Standings</h2>
      <div className="standings-header">
        <span>#</span>
        <span className="standings-team-text">Team</span>
        <span>MP</span>
        <span>Win</span>
        <span>Draw</span>
        <span>Lose</span>
        <span>Goals</span>
        <span>GD</span>
        <span>Form</span>
        <span>PTS</span>
      </div>
      <div className="standings-rows">
        {laLigaTable["0"].league.standings["0"].map((teamData) => (
          <LaLigaItem
            teamData={teamData}
            key={`la-liga-table-${teamData.team.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default LaLiga;
