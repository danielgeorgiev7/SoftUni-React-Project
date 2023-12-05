import { createContext, useEffect, useState } from "react";
import { getFixtures, getPreviousFixtures } from "../services/footballAPI";

const FootballContext = createContext();

export const FootballProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [fixtures, setFixtures] = useState(null);
  const [previousFixtures, setPreviousFixtures] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(function () {
    getFixtures().then((fixtures) =>
      fixtures?.code || fixtures.length === "0"
        ? setErrorMessage(fixtures.errorMessage || "Fixtures couldn't load")
        : setFixtures(fixtures)
    );
    getPreviousFixtures().then((prevFixtures) =>
      prevFixtures?.code || prevFixtures.length === "0"
        ? setErrorMessage(
            prevFixtures.errorMessage || "Previous Fixtures couldn't load"
          )
        : setPreviousFixtures(prevFixtures)
    );
  }, []);

  const values = {
    errorMessage,
    setErrorMessage,
    fixtures,
    previousFixtures,
  };

  return (
    <FootballContext.Provider value={values}>
      {children}
    </FootballContext.Provider>
  );
};

FootballContext.displayName = "FootballContext";

export default FootballContext;
