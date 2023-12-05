import { createContext, useEffect, useState } from "react";
import {
  getAllPlayers,
  getFixtures,
  getLaLiga,
  getPreviousFixtures,
} from "../services/footballAPI";

const FootballContext = createContext();

export const FootballProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [fixtures, setFixtures] = useState(null);
  const [previousFixtures, setPreviousFixtures] = useState(null);
  const [players, setPlayers] = useState(null);
  const [laLigaTable, setLaLigaTable] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(function () {
    getFixtures().then((fixturesData) =>
      fixturesData?.code || fixturesData.length === "0"
        ? setErrorMessage(fixturesData.errorMessage || "Fixtures couldn't load")
        : setFixtures(fixturesData)
    );
    getPreviousFixtures().then((prevFixturesData) =>
      prevFixturesData?.code || prevFixturesData.length === "0"
        ? setErrorMessage(
            prevFixturesData.errorMessage || "Previous Fixtures couldn't load"
          )
        : setPreviousFixtures(prevFixturesData)
    );
    getAllPlayers().then((playersData) =>
      playersData?.code || playersData.length === "0"
        ? setErrorMessage(playersData.errorMessage || "Players couldn't load")
        : setPlayers(playersData)
    );
    getLaLiga().then((laLigaData) =>
      laLigaData?.code || laLigaData.length === "0"
        ? setErrorMessage(
            laLigaData.errorMessage || "La Liga standings couldn't load"
          )
        : setLaLigaTable(laLigaData)
    );
  }, []);

  const values = {
    errorMessage,
    setErrorMessage,
    fixtures,
    previousFixtures,
    players,
    laLigaTable,
  };

  return (
    <FootballContext.Provider value={values}>
      {children}
    </FootballContext.Provider>
  );
};

FootballContext.displayName = "FootballContext";

export default FootballContext;
