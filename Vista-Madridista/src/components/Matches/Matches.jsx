import { useState } from "react";
import MatchPanel from "./MatchPanel";
import "./Matches.css";
import Checkbox from "./Checkbox";
import MatchModal from "./MatchModal";
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
      <div
        className={`modal-container ${
          modalOpen ? "modal-outside-blur" : "hidden"
        }`}
        onClick={OutOfModalHandle}
      >
        <MatchModal match={currentMatch} className />
      </div>

      <div className="matches">
        <form name="all-matches" action="#" className="previous-matches-form">
          <label htmlFor="all-matches">See all matches 23/24</label>
          <Checkbox
            checkboxChecked={checkboxChecked}
            setCheckboxChecked={setCheckboxChecked}
          />
        </form>
        <ul className="matches-wrapper">
          {checkboxChecked &&
            previousMatches.map((match) => (
              <MatchPanel
                match={match}
                key={match.fixture?.id}
                setModalOpen={setModalOpen}
                id={match.fixture?.id}
                setCurrentMatch={setCurrentMatch}
                detailsBtnClickHandler={detailsBtnClickHandler}
              />
            ))}
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
    </>
  );
}

export default Matches;
