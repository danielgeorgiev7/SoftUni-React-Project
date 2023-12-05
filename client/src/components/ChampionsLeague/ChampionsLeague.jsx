import { useContext } from "react";
import CLItem from "./CLItem";
import "./ChampionsLeague.css";
import FootballContext from "../../contexts/footballContext";
function ChampionsLeague() {
  const { CLGroups } = useContext(FootballContext);
  if (!CLGroups) return;
  return (
    <>
      <h2 className="cl-h2">Champions League Group Stage</h2>
      <div className="cl-groups">
        {CLGroups["0"].league.standings.map((group, index) => (
          <div key={index} className="cl-group-container">
            <h3 className="cl-group-text">{group[0].group}</h3>
            <div className="cl-header">
              <span>#</span>
              <span className="cl-team-text">Team</span>
              <span>MP</span>
              <span>W</span>
              <span>D</span>
              <span>L</span>
              <span>G</span>
              <span>GD</span>
              <span>Form</span>
              <span>PTS</span>
            </div>
            <div className="cl-team-rows">
              {group.map((team) => (
                <CLItem teamData={team} key={`cl-table-${team.team.id}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChampionsLeague;
