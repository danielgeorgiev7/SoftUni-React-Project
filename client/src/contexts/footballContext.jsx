import { createContext, useEffect, useState } from "react";
import {
  getAllPlayers,
  getChampionsLeague,
  getFixtureInfo,
  getFixtures,
  getLaLiga,
  getPlayer,
  getPreviousFixtures,
} from "../services/footballAPI";

const FootballContext = createContext();

export const FootballProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState({});
  const [fixtures, setFixtures] = useState(null);
  const [previousFixtures, setPreviousFixtures] = useState(null);
  const [currentFixture, setCurrentFixture] = useState(null);
  const [players, setPlayers] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [laLigaTable, setLaLigaTable] = useState(null);
  const [CLGroups, setCLGroups] = useState(null);
  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(function () {
    getFixtures().then((fixturesData) =>
      setFixtures(
        hasError(fixturesData)
          ? fixturesData?.message || "Fixtures couldn't load"
          : fixturesData
      )
    );
    getPreviousFixtures().then((prevFixturesData) =>
      setPreviousFixtures(
        hasError(prevFixturesData)
          ? prevFixturesData?.message || "Previous Fixtures couldn't load"
          : prevFixturesData
      )
    );
    getAllPlayers().then((playersData) =>
      setPlayers(
        hasError(playersData)
          ? playersData?.message || "Players couldn't load"
          : playersData
      )
    );
    getLaLiga().then((laLigaData) =>
      setLaLigaTable(
        hasError(laLigaData)
          ? laLigaData?.message || "La Liga standings couldn't load"
          : laLigaData
      )
    );
    getChampionsLeague().then((championsLeagueData) =>
      setCLGroups(
        hasError(championsLeagueData)
          ? championsLeagueData?.message ||
              "Champions league groups couldn't load"
          : championsLeagueData
      )
    );
  }, []);

  async function getCurrentFixture(id) {
    if (currentFixture === null || currentFixture.fixture.id !== id) {
      const result = await getFixtureInfo(id);
      if (!hasError(result)) {
        setCurrentFixture(result["0"]);
      }
    }
  }

  async function getCurrentPlayer(id) {
    if (currentPlayer === null || currentPlayer.player.id !== id) {
      const result = await getPlayer(id);
      if (!hasError(result)) {
        setCurrentPlayer(result["0"]);
      }
    }
  }

  function hasError(requestData) {
    if (
      requestData.length === 0 ||
      requestData instanceof Error ||
      requestData instanceof Promise
    )
      return true;
    else return false;
  }

  const values = {
    errorMessage,
    setErrorMessage,
    fixtures,
    previousFixtures,
    players,
    laLigaTable,
    CLGroups,
    hasError,
    currentFixture,
    setCurrentFixture,
    getCurrentFixture,
    currentPlayer,
    setCurrentPlayer,
    getCurrentPlayer,
  };

  return (
    <FootballContext.Provider value={values}>
      {children}
    </FootballContext.Provider>
  );
};

FootballContext.displayName = "FootballContext";

export default FootballContext;
