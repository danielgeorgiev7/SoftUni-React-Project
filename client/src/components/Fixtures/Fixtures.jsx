import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import FixturesPanel from "./FixturesPanel";
import Checkbox from "./Checkbox";
import FixturesModal from "./FixturesModal";
import FootballContext from "../../contexts/footballContext";
import Loading from "../Loading/Loading";
import "./Fixtures.css";

function Fixtures() {
  const navigate = useNavigate();
  const { fixtures, previousFixtures } = useContext(FootballContext);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [buttonClicked, setButtonClicked] = useState("summary");
  const location = useLocation();
  const isModalHidden =
    location.pathname.split("/")[2] === "" ||
    location.pathname.split("/")[2] === undefined;
  // console.log(isModalHidden);

  if (location.pathname.split("/")[2] !== "")
    if (!fixtures || !previousFixtures) return <Loading />;

  async function detailsBtnClickHandler(fixture) {
    navigate(`/fixtures/${fixture.fixture.id}`);
  }

  async function OutOfModalHandle() {
    setButtonClicked("summary");
    navigate("/fixtures");
  }

  return (
    <>
      {!isModalHidden && (
        <FixturesModal
          outOfModalHandle={OutOfModalHandle}
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
        ></FixturesModal>
      )}

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
