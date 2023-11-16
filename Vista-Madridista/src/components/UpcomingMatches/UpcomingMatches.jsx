import { useState } from "react";
import MatchPanel from "./MatchPanel";
import "./UpcomingMatches.css";
import Checkbox from "./Checkbox";

function UpcomingMatches({ upcomingMatches, previousMatches }) {
  let [isChecked, setIsChecked] = useState(false);
  return (
    <div className="upcoming-matches">
      <form name="all-matches" action="#" className="previous-matches-form">
        <label htmlFor="all-matches">See all matches 23/24</label>
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
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
