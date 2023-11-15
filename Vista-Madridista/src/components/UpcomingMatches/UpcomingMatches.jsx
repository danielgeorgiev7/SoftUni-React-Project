import { useState } from "react";
import MatchPanel from "./MatchPanel";
import "./UpcomingMatches.css";
import "./checkbox.css";

function UpcomingMatches({ upcomingMatches, previousMatches }) {
  let [isChecked, setIsChecked] = useState(false);
  return (
    <div className="upcoming-matches">
      <form name="all-matches" action="#" className="previous-matches-form">
        <label htmlFor="all-matches">See previous matches </label>
        <div className="checkbox-wrapper-22">
          <label className="switch" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              value={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className="slider round"></div>
          </label>
        </div>
      </form>
      <ul className="matches-wrapper">
        {isChecked &&
          previousMatches.map((match) => (
            <MatchPanel match={match} key={match.fixture?.id} />
          ))}
        {upcomingMatches.map((match) => (
          <MatchPanel match={match} key={match.fixture?.id} />
        ))}
      </ul>
    </div>
  );
}

export default UpcomingMatches;
