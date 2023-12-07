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
    // getFixtures().then((fixturesData) =>
    //   hasError(fixturesData)
    //     ? setErrorMessage(fixturesData.errorMessage || "Fixtures couldn't load")
    //     : setFixtures(fixturesData)
    // );
    // getPreviousFixtures().then((prevFixturesData) =>
    //   hasError(prevFixturesData)
    //     ? setErrorMessage(
    //         prevFixturesData.errorMessage || "Previous Fixtures couldn't load"
    //       )
    //     : setPreviousFixtures(prevFixturesData)
    // );
    getAllPlayers().then((playersData) =>
      hasError(playersData)
        ? setErrorMessage(playersData.errorMessage || "Players couldn't load")
        : setPlayers(playersData)
    );
    // getLaLiga().then((laLigaData) =>
    //   hasError(laLigaData)
    //     ? setErrorMessage(
    //         laLigaData.errorMessage || "La Liga standings couldn't load"
    //       )
    //     : setLaLigaTable(laLigaData)
    // );
    // getChampionsLeague().then((championsLeagueData) =>
    //   hasError(championsLeagueData)
    //     ? setErrorMessage(
    //         championsLeagueData.errorMessage ||
    //           "Champions league groups couldn't load"
    //       )
    //     : setCLGroups(championsLeagueData)
    // );
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
      requestData.code ||
      requestData.length === 0 ||
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
