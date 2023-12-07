import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import FixturesPanel from "./FixturesPanel";
import Checkbox from "./Checkbox";
import FixturesModal from "./FixturesModal";
import FootballContext from "../../contexts/footballContext";
import "./Fixtures.css";
import { getFixtureInfo } from "../../services/footballAPI";
import Loading from "../Loading/Loading";

function Fixtures() {
  const navigate = useNavigate();
  const { fixtures, previousFixtures } = useContext(FootballContext);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFixture, setCurrentFixture] = useState(null);
  const [buttonClicked, setButtonClicked] = useState("summary");

  if (fixtures === null || previousFixtures === null) return <Loading />;

  async function detailsBtnClickHandler(fixture) {
    const fixtureResult = await getFixtureInfo(fixture.fixture.id);
    setCurrentFixture(fixtureResult["0"]);
    setModalOpen(true);
    navigate(`/fixtures/${fixture.fixture.id}`);
  }

  async function OutOfModalHandle() {
    setModalOpen(false);
    setButtonClicked("summary");
    navigate("/fixtures");
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

      <div className="fixtures-container">
        <div className="fixtures">
          <form
            name="all-fixtures"
            action="#"
            className="previous-fixtures-form"
          >
            <label htmlFor="all-fixtures">See all fixtures 23/24</label>
            <Checkbox
              checkboxChecked={checkboxChecked}
              setCheckboxChecked={setCheckboxChecked}
            />
          </form>
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
