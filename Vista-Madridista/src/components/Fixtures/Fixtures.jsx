import { useState } from "react";
import FixturesPanel from "./FixturesPanel";
import "./Fixtures.css";
import Checkbox from "./Checkbox";
import FixturesModal from "./FixturesModal";
import { useNavigate } from "react-router";

function Fixtures({ fixtures, previousFixtures }) {
  const navigate = useNavigate();
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFixture, setCurrentFixture] = useState(null);
  const [buttonClicked, setButtonClicked] = useState("summary");

  function detailsBtnClickHandler(fixture) {
    setModalOpen(true);
    setCurrentFixture(fixture);
    navigate(`/fixtures/${fixture.fixture.id}`);
  }

  async function OutOfModalHandle() {
    setModalOpen(false);
    setButtonClicked("summary");
  }

  return (
    <>
      <FixturesModal
        fixture={currentFixture}
        modalOpen={modalOpen}
        outOfModalHandle={OutOfModalHandle}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      ></FixturesModal>

      <div className="fixtures">
        <form name="all-fixtures" action="#" className="previous-fixtures-form">
          <label htmlFor="all-fixtures">See all fixtures 23/24</label>
          <Checkbox
            checkboxChecked={checkboxChecked}
            setCheckboxChecked={setCheckboxChecked}
          />
        </form>
        <div>
          {checkboxChecked && (
            <>
              <h2 className="fixtures-heading">Past Fixtures</h2>
              <ul className="fixtures-wrapper">
                {previousFixtures.map((fixture) => (
                  <FixturesPanel
                    fixture={fixture}
                    key={fixture.fixture?.id}
                    setModalOpen={setModalOpen}
                    id={fixture.fixture?.id}
                    setCurrentFixture={setCurrentFixture}
                    detailsBtnClickHandler={detailsBtnClickHandler}
                  />
                ))}
              </ul>
            </>
          )}
          <h2 className="fixtures-heading">Upcoming Fixtures</h2>
          <ul className="fixtures-wrapper">
            {fixtures.map((fixture) => (
              <FixturesPanel
                fixture={fixture}
                key={fixture.fixture?.id}
                setModalOpen={setModalOpen}
                id={fixture.fixture?.id}
                setCurrentFixture={setCurrentFixture}
                detailsBtnClickHandler={detailsBtnClickHandler}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Fixtures;
