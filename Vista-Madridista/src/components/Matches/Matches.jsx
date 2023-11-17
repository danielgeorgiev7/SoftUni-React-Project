import { useState } from "react";
import MatchPanel from "./MatchPanel";
import "./Matches.css";
import Checkbox from "./Checkbox";
import MatchModal from "./MatchModal/MatchModal";
import { useNavigate } from "react-router";

function Matches({ matches, previousMatches }) {
  const navigate = useNavigate();
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentMatch, setCurrentMatch] = useState(null);

  function detailsBtnClickHandler(match) {
    setModalOpen(true);
    setCurrentMatch(match);
    navigate(`/matches/${match.fixture.id}`);
  }

  async function OutOfModalHandle() {
    setModalOpen(false);
  }

  return (
    <>
      <MatchModal
        match={currentMatch}
        modalOpen={modalOpen}
        outOfModalHandle={OutOfModalHandle}
      ></MatchModal>

      <div className="matches">
        <form name="all-matches" action="#" className="previous-matches-form">
          <label htmlFor="all-matches">See all matches 23/24</label>
          <Checkbox
            checkboxChecked={checkboxChecked}
            setCheckboxChecked={setCheckboxChecked}
          />
        </form>
        <div>
          {checkboxChecked && (
            <>
              <h2 className="matches-heading">Past Matches</h2>
              <ul className="matches-wrapper">
                {previousMatches.map((match) => (
                  <MatchPanel
                    match={match}
                    key={match.fixture?.id}
                    setModalOpen={setModalOpen}
                    id={match.fixture?.id}
                    setCurrentMatch={setCurrentMatch}
                    detailsBtnClickHandler={detailsBtnClickHandler}
                  />
                ))}
              </ul>
            </>
          )}
          <h2 className="matches-heading">Upcoming Matches</h2>
          <ul className="matches-wrapper">
            {matches.map((match) => (
              <MatchPanel
                match={match}
                key={match.fixture?.id}
                setModalOpen={setModalOpen}
                id={match.fixture?.id}
                setCurrentMatch={setCurrentMatch}
                detailsBtnClickHandler={detailsBtnClickHandler}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Matches;
