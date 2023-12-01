import { Routes, Route } from "react-router-dom";
import Fixtures from "./components/Fixtures/Fixtures";
import Players from "./components/Players/Players";
import ChampionsLeague from "./components/ChampionsLeague/ChampionsLeague";
import LaLiga from "./components/LaLiga/LaLiga";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import { useContext, useEffect, useState } from "react";
import FixturesModal from "./components/Fixtures/FixturesModal";
import PlayersModal from "./components/Players/PlayersModal";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/logout";
import Feed from "./components/Feed/Feed";
import AuthContext from "./contexts/authContext";

function App() {
  const { loggedIn } = useContext(AuthContext);
  const [fixtures, setFixtures] = useState([]);
  const [previousFixtures, setPreviousFixtures] = useState([]);

  useEffect(function () {
    setPreviousFixtures([
      {
        fixture: {
          id: 1030303,
          referee: "T. Ford",
          timezone: "UTC",
          date: "2023-07-24T02:00:00+00:00",
          timestamp: 1690164000,
          periods: {
            first: 1690164000,
            second: 1690167600,
          },
          venue: {
            id: null,
            name: "Rose Bowl",
            city: "Pasadena, California",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 1",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
          away: {
            id: 489,
            name: "AC Milan",
            logo: "https://media-4.api-sports.io/football/teams/489.png",
            winner: false,
          },
        },
        goals: {
          home: 3,
          away: 2,
        },
        score: {
          halftime: {
            home: 0,
            away: 2,
          },
          fulltime: {
            home: 3,
            away: 2,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1030312,
          referee: "L. Szpala",
          timezone: "UTC",
          date: "2023-07-27T00:30:00+00:00",
          timestamp: 1690417800,
          periods: {
            first: 1690417800,
            second: 1690421400,
          },
          venue: {
            id: null,
            name: "NRG Stadium",
            city: "Houston, Texas",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 1",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
          away: {
            id: 33,
            name: "Manchester United",
            logo: "https://media-4.api-sports.io/football/teams/33.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 2,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1030323,
          referee: "I. Elfath",
          timezone: "UTC",
          date: "2023-08-02T23:30:00+00:00",
          timestamp: 1691019000,
          periods: {
            first: 1691019000,
            second: 1691022600,
          },
          venue: {
            id: null,
            name: "Camping World Stadium",
            city: "Orlando, Florida",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 1",
        },
        teams: {
          home: {
            id: 496,
            name: "Juventus",
            logo: "https://media-4.api-sports.io/football/teams/496.png",
            winner: true,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: false,
          },
        },
        goals: {
          home: 3,
          away: 1,
        },
        score: {
          halftime: {
            home: 2,
            away: 1,
          },
          fulltime: {
            home: 3,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1037953,
          referee: "Jesús Gil",
          timezone: "UTC",
          date: "2023-08-12T19:30:00+00:00",
          timestamp: 1691868600,
          periods: {
            first: 1691868600,
            second: 1691872200,
          },
          venue: {
            id: 1460,
            name: "San Mamés Barria",
            city: "Bilbao",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 1",
        },
        teams: {
          home: {
            id: 531,
            name: "Athletic Club",
            logo: "https://media-4.api-sports.io/football/teams/531.png",
            winner: false,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 2,
        },
        score: {
          halftime: {
            home: 0,
            away: 2,
          },
          fulltime: {
            home: 0,
            away: 2,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1037962,
          referee: "José Sánchez",
          timezone: "UTC",
          date: "2023-08-19T17:30:00+00:00",
          timestamp: 1692466200,
          periods: {
            first: 1692466200,
            second: 1692469800,
          },
          venue: {
            id: 19216,
            name: "Power Horse Stadium – Estadio de los Juegos Mediterráneos",
            city: "Almería",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 2",
        },
        teams: {
          home: {
            id: 723,
            name: "Almeria",
            logo: "https://media-4.api-sports.io/football/teams/723.png",
            winner: false,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
        },
        goals: {
          home: 1,
          away: 3,
        },
        score: {
          halftime: {
            home: 1,
            away: 1,
          },
          fulltime: {
            home: 1,
            away: 3,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1037973,
          referee: "Isidro Díaz de Mera",
          timezone: "UTC",
          date: "2023-08-25T19:30:00+00:00",
          timestamp: 1692991800,
          periods: {
            first: 1692991800,
            second: 1692995400,
          },
          venue: {
            id: 1467,
            name: "Abanca-Balaídos",
            city: "Vigo",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 3",
        },
        teams: {
          home: {
            id: 538,
            name: "Celta Vigo",
            logo: "https://media-4.api-sports.io/football/teams/538.png",
            winner: false,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 1,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 0,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1037990,
          referee: "Mario Melero",
          timezone: "UTC",
          date: "2023-09-02T14:15:00+00:00",
          timestamp: 1693664100,
          periods: {
            first: 1693664100,
            second: 1693667700,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 4",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
          away: {
            id: 546,
            name: "Getafe",
            logo: "https://media-4.api-sports.io/football/teams/546.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 1,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 2,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1037996,
          referee: "César Soto",
          timezone: "UTC",
          date: "2023-09-17T19:00:00+00:00",
          timestamp: 1694977200,
          periods: {
            first: 1694977200,
            second: 1694980800,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 5",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
          away: {
            id: 548,
            name: "Real Sociedad",
            logo: "https://media-4.api-sports.io/football/teams/548.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 1,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 2,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038003,
          referee: "Javier Alberola",
          timezone: "UTC",
          date: "2023-09-24T19:00:00+00:00",
          timestamp: 1695582000,
          periods: {
            first: 1695582000,
            second: 1695585600,
          },
          venue: {
            id: 19217,
            name: "Estádio Cívitas Metropolitano",
            city: "Madrid",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 6",
        },
        teams: {
          home: {
            id: 530,
            name: "Atletico Madrid",
            logo: "https://media-4.api-sports.io/football/teams/530.png",
            winner: true,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: false,
          },
        },
        goals: {
          home: 3,
          away: 1,
        },
        score: {
          halftime: {
            home: 2,
            away: 1,
          },
          fulltime: {
            home: 3,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038020,
          referee: "José Munuera",
          timezone: "UTC",
          date: "2023-09-27T17:00:00+00:00",
          timestamp: 1695834000,
          periods: {
            first: 1695834000,
            second: 1695837600,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 7",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
          away: {
            id: 534,
            name: "Las Palmas",
            logo: "https://media-4.api-sports.io/football/teams/534.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 2,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038027,
          referee: "Juan Pulido",
          timezone: "UTC",
          date: "2023-09-30T16:30:00+00:00",
          timestamp: 1696091400,
          periods: {
            first: 1696091400,
            second: 1696095000,
          },
          venue: {
            id: 1478,
            name: "Estadi Municipal de Montilivi",
            city: "Girona",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 8",
        },
        teams: {
          home: {
            id: 547,
            name: "Girona",
            logo: "https://media-4.api-sports.io/football/teams/547.png",
            winner: false,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 3,
        },
        score: {
          halftime: {
            home: 0,
            away: 2,
          },
          fulltime: {
            home: 0,
            away: 3,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038039,
          referee: "Guillermo Cuadra",
          timezone: "UTC",
          date: "2023-10-07T14:15:00+00:00",
          timestamp: 1696688100,
          periods: {
            first: 1696688100,
            second: 1696691700,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 9",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
          away: {
            id: 727,
            name: "Osasuna",
            logo: "https://media-4.api-sports.io/football/teams/727.png",
            winner: false,
          },
        },
        goals: {
          home: 4,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 4,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038049,
          referee: "Ricardo De Burgos",
          timezone: "UTC",
          date: "2023-10-21T16:30:00+00:00",
          timestamp: 1697905800,
          periods: {
            first: 1697905800,
            second: 1697909400,
          },
          venue: {
            id: 1494,
            name: "Estadio Ramón Sánchez Pizjuán",
            city: "Sevilla",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 10",
        },
        teams: {
          home: {
            id: 536,
            name: "Sevilla",
            logo: "https://media-4.api-sports.io/football/teams/536.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: 1,
          away: 1,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 1,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038054,
          referee: "Jesús Gil",
          timezone: "UTC",
          date: "2023-10-28T14:15:00+00:00",
          timestamp: 1698502500,
          periods: {
            first: 1698502500,
            second: 1698506100,
          },
          venue: {
            id: 19939,
            name: "Estadi Olímpic Lluís Companys",
            city: "Barcelona",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 11",
        },
        teams: {
          home: {
            id: 529,
            name: "Barcelona",
            logo: "https://media-4.api-sports.io/football/teams/529.png",
            winner: false,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
        },
        goals: {
          home: 1,
          away: 2,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 1,
            away: 2,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038070,
          referee: "Juan Martínez",
          timezone: "UTC",
          date: "2023-11-05T20:00:00+00:00",
          timestamp: 1699214400,
          periods: {
            first: 1699214400,
            second: 1699218000,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 12",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 728,
            name: "Rayo Vallecano",
            logo: "https://media-4.api-sports.io/football/teams/728.png",
            winner: null,
          },
        },
        goals: {
          home: 0,
          away: 0,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 0,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038075,
          referee: "José Sánchez",
          timezone: "UTC",
          date: "2023-11-11T20:00:00+00:00",
          timestamp: 1699732800,
          periods: {
            first: 1699732800,
            second: 1699736400,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 13",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
          away: {
            id: 532,
            name: "Valencia",
            logo: "https://media-4.api-sports.io/football/teams/532.png",
            winner: false,
          },
        },
        goals: {
          home: 5,
          away: 1,
        },
        score: {
          halftime: {
            home: 2,
            away: 0,
          },
          fulltime: {
            home: 5,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1097382,
          referee: null,
          timezone: "UTC",
          date: "2023-07-29T21:00:00+00:00",
          timestamp: 1690664400,
          periods: {
            first: 1690664400,
            second: 1690668000,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 5",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: false,
          },
          away: {
            id: 529,
            name: "Barcelona",
            logo: "https://media-4.api-sports.io/football/teams/529.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 3,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 0,
            away: 3,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1117081,
          referee: "A. Chapman",
          timezone: "UTC",
          date: "2023-07-29T21:00:00+00:00",
          timestamp: 1690664400,
          periods: {
            first: 1690664400,
            second: 1690668000,
          },
          venue: {
            id: null,
            name: "AT&T Stadium",
            city: "Arlington, Texas",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 667,
          name: "Friendlies Clubs",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/667.png",
          flag: null,
          season: 2023,
          round: "Club Friendlies 1",
        },
        teams: {
          home: {
            id: 529,
            name: "Barcelona",
            logo: "https://media-4.api-sports.io/football/teams/529.png",
            winner: true,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: false,
          },
        },
        goals: {
          home: 3,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 3,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1126153,
          referee: "E. Eskås",
          timezone: "UTC",
          date: "2023-09-20T16:45:00+00:00",
          timestamp: 1695228300,
          periods: {
            first: 1695228300,
            second: 1695231900,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 2,
          name: "UEFA Champions League",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/2.png",
          flag: null,
          season: 2023,
          round: "Group C - 1",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
          away: {
            id: 182,
            name: "Union Berlin",
            logo: "https://media-4.api-sports.io/football/teams/182.png",
            winner: false,
          },
        },
        goals: {
          home: 1,
          away: 0,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 1,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1126166,
          referee: "C. Turpin",
          timezone: "UTC",
          date: "2023-10-03T19:00:00+00:00",
          timestamp: 1696359600,
          periods: {
            first: 1696359600,
            second: 1696363200,
          },
          venue: {
            id: 11904,
            name: "Stadio Diego Armando Maradona",
            city: "Napoli",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 2,
          name: "UEFA Champions League",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/2.png",
          flag: null,
          season: 2023,
          round: "Group C - 2",
        },
        teams: {
          home: {
            id: 492,
            name: "Napoli",
            logo: "https://media-4.api-sports.io/football/teams/492.png",
            winner: false,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
        },
        goals: {
          home: 2,
          away: 3,
        },
        score: {
          halftime: {
            home: 1,
            away: 2,
          },
          fulltime: {
            home: 2,
            away: 3,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1126181,
          referee: "M. Oliver",
          timezone: "UTC",
          date: "2023-10-24T19:00:00+00:00",
          timestamp: 1698174000,
          periods: {
            first: 1698174000,
            second: 1698177600,
          },
          venue: {
            id: 1291,
            name: "Estádio Municipal de Braga",
            city: "Braga",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 2,
          name: "UEFA Champions League",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/2.png",
          flag: null,
          season: 2023,
          round: "Group C - 3",
        },
        teams: {
          home: {
            id: 217,
            name: "SC Braga",
            logo: "https://media-4.api-sports.io/football/teams/217.png",
            winner: false,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
        },
        goals: {
          home: 1,
          away: 2,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 1,
            away: 2,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1126206,
          referee: "H. Meler",
          timezone: "UTC",
          date: "2023-11-08T20:00:00+00:00",
          timestamp: 1699473600,
          periods: {
            first: 1699473600,
            second: 1699477200,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 2,
          name: "UEFA Champions League",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/2.png",
          flag: null,
          season: 2023,
          round: "Group C - 4",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
          away: {
            id: 217,
            name: "SC Braga",
            logo: "https://media-4.api-sports.io/football/teams/217.png",
            winner: false,
          },
        },
        goals: {
          home: 3,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 3,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ]);
  }, []);

  useEffect(function () {
    setFixtures([
      {
        fixture: {
          id: 1038084,
          referee: null,
          timezone: "UTC",
          date: "2023-11-26T17:30:00+00:00",
          timestamp: 1701019800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 11915,
            name: "Estadio Nuevo Mirandilla",
            city: "Cádiz",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 14",
        },
        teams: {
          home: {
            id: 724,
            name: "Cadiz",
            logo: "https://media-4.api-sports.io/football/teams/724.png",
            winner: false,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 7,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038100,
          referee: null,
          timezone: "UTC",
          date: "2023-12-02T17:30:00+00:00",
          timestamp: 1701538200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 15",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 715,
            name: "Granada CF",
            logo: "https://media-4.api-sports.io/football/teams/715.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038103,
          referee: null,
          timezone: "UTC",
          date: "2023-12-09T15:15:00+00:00",
          timestamp: 1702134900,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1489,
            name: "Estadio Benito Villamarín",
            city: "Sevilla",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 16",
        },
        teams: {
          home: {
            id: 543,
            name: "Real Betis",
            logo: "https://media-4.api-sports.io/football/teams/543.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1126220,
          referee: null,
          timezone: "UTC",
          date: "2023-11-29T20:00:00+00:00",
          timestamp: 1701288000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 2,
          name: "UEFA Champions League",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/2.png",
          flag: null,
          season: 2023,
          round: "Group C - 5",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 492,
            name: "Napoli",
            logo: "https://media-4.api-sports.io/football/teams/492.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1126229,
          referee: null,
          timezone: "UTC",
          date: "2023-12-12T20:00:00+00:00",
          timestamp: 1702411200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 694,
            name: "Olympiastadion Berlin",
            city: "Berlin",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 2,
          name: "UEFA Champions League",
          country: "World",
          logo: "https://media-4.api-sports.io/football/leagues/2.png",
          flag: null,
          season: 2023,
          round: "Group C - 6",
        },
        teams: {
          home: {
            id: 182,
            name: "Union Berlin",
            logo: "https://media-4.api-sports.io/football/teams/182.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038116,
          referee: null,
          timezone: "UTC",
          date: "2023-12-17T00:00:00+00:00",
          timestamp: 1702771200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 17",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 533,
            name: "Villarreal",
            logo: "https://media-4.api-sports.io/football/teams/533.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038129,
          referee: null,
          timezone: "UTC",
          date: "2023-12-20T00:00:00+00:00",
          timestamp: 1703030400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1470,
            name: "Estadio de Mendizorroza",
            city: "Vitoria-Gasteiz",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 18",
        },
        teams: {
          home: {
            id: 542,
            name: "Alaves",
            logo: "https://media-4.api-sports.io/football/teams/542.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038140,
          referee: null,
          timezone: "UTC",
          date: "2024-01-03T00:00:00+00:00",
          timestamp: 1704240000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 19",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 798,
            name: "Mallorca",
            logo: "https://media-4.api-sports.io/football/teams/798.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038148,
          referee: null,
          timezone: "UTC",
          date: "2024-01-14T00:00:00+00:00",
          timestamp: 1705190400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1476,
            name: "Coliseum Alfonso Pérez",
            city: "Getafe",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 20",
        },
        teams: {
          home: {
            id: 546,
            name: "Getafe",
            logo: "https://media-4.api-sports.io/football/teams/546.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038155,
          referee: null,
          timezone: "UTC",
          date: "2024-01-21T00:00:00+00:00",
          timestamp: 1705795200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 21",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 723,
            name: "Almeria",
            logo: "https://media-4.api-sports.io/football/teams/723.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038166,
          referee: null,
          timezone: "UTC",
          date: "2024-01-28T00:00:00+00:00",
          timestamp: 1706400000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1481,
            name: "Estadio de Gran Canaria",
            city: "Las Palmas de Gran Canaria",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 22",
        },
        teams: {
          home: {
            id: 534,
            name: "Las Palmas",
            logo: "https://media-4.api-sports.io/football/teams/534.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038179,
          referee: null,
          timezone: "UTC",
          date: "2024-02-04T00:00:00+00:00",
          timestamp: 1707004800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 23",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 530,
            name: "Atletico Madrid",
            logo: "https://media-4.api-sports.io/football/teams/530.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038190,
          referee: null,
          timezone: "UTC",
          date: "2024-02-11T00:00:00+00:00",
          timestamp: 1707609600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 24",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 547,
            name: "Girona",
            logo: "https://media-4.api-sports.io/football/teams/547.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038195,
          referee: null,
          timezone: "UTC",
          date: "2024-02-18T00:00:00+00:00",
          timestamp: 1708214400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1488,
            name: "Estadio de Vallecas",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 25",
        },
        teams: {
          home: {
            id: 728,
            name: "Rayo Vallecano",
            logo: "https://media-4.api-sports.io/football/teams/728.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038206,
          referee: null,
          timezone: "UTC",
          date: "2024-02-25T00:00:00+00:00",
          timestamp: 1708819200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 26",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 536,
            name: "Sevilla",
            logo: "https://media-4.api-sports.io/football/teams/536.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038218,
          referee: null,
          timezone: "UTC",
          date: "2024-03-03T00:00:00+00:00",
          timestamp: 1709424000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1497,
            name: "Estadio de Mestalla",
            city: "Valencia",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 27",
        },
        teams: {
          home: {
            id: 532,
            name: "Valencia",
            logo: "https://media-4.api-sports.io/football/teams/532.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038230,
          referee: null,
          timezone: "UTC",
          date: "2024-03-10T00:00:00+00:00",
          timestamp: 1710028800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 28",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 538,
            name: "Celta Vigo",
            logo: "https://media-4.api-sports.io/football/teams/538.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038234,
          referee: null,
          timezone: "UTC",
          date: "2024-03-17T00:00:00+00:00",
          timestamp: 1710633600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1486,
            name: "Estadio El Sadar",
            city: "Iruñea",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 29",
        },
        teams: {
          home: {
            id: 727,
            name: "Osasuna",
            logo: "https://media-4.api-sports.io/football/teams/727.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038248,
          referee: null,
          timezone: "UTC",
          date: "2024-03-31T00:00:00+00:00",
          timestamp: 1711843200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 30",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 531,
            name: "Athletic Club",
            logo: "https://media-4.api-sports.io/football/teams/531.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038255,
          referee: null,
          timezone: "UTC",
          date: "2024-04-14T00:00:00+00:00",
          timestamp: 1713052800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 19940,
            name: "Estadi Mallorca Son Moix",
            city: "Palma de Mallorca",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 31",
        },
        teams: {
          home: {
            id: 798,
            name: "Mallorca",
            logo: "https://media-4.api-sports.io/football/teams/798.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038267,
          referee: null,
          timezone: "UTC",
          date: "2024-04-21T00:00:00+00:00",
          timestamp: 1713657600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 32",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 529,
            name: "Barcelona",
            logo: "https://media-4.api-sports.io/football/teams/529.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038281,
          referee: null,
          timezone: "UTC",
          date: "2024-04-28T00:00:00+00:00",
          timestamp: 1714262400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1491,
            name: "Reale Arena",
            city: "Donostia-San Sebastián",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 33",
        },
        teams: {
          home: {
            id: 548,
            name: "Real Sociedad",
            logo: "https://media-4.api-sports.io/football/teams/548.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038288,
          referee: null,
          timezone: "UTC",
          date: "2024-05-05T00:00:00+00:00",
          timestamp: 1714867200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 34",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 724,
            name: "Cadiz",
            logo: "https://media-4.api-sports.io/football/teams/724.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038296,
          referee: null,
          timezone: "UTC",
          date: "2024-05-12T00:00:00+00:00",
          timestamp: 1715472000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1479,
            name: "Estadio Nuevo Los Cármenes",
            city: "Granada",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 35",
        },
        teams: {
          home: {
            id: 715,
            name: "Granada CF",
            logo: "https://media-4.api-sports.io/football/teams/715.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038311,
          referee: null,
          timezone: "UTC",
          date: "2024-05-15T00:00:00+00:00",
          timestamp: 1715731200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 36",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 542,
            name: "Alaves",
            logo: "https://media-4.api-sports.io/football/teams/542.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038321,
          referee: null,
          timezone: "UTC",
          date: "2024-05-19T00:00:00+00:00",
          timestamp: 1716076800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1498,
            name: "Estadio de la Cerámica",
            city: "Villarreal",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 37",
        },
        teams: {
          home: {
            id: 533,
            name: "Villarreal",
            logo: "https://media-4.api-sports.io/football/teams/533.png",
            winner: null,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1038330,
          referee: null,
          timezone: "UTC",
          date: "2024-05-26T00:00:00+00:00",
          timestamp: 1716681600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1456,
            name: "Estadio Santiago Bernabéu",
            city: "Madrid",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 140,
          name: "La Liga",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/140.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Regular Season - 38",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 543,
            name: "Real Betis",
            logo: "https://media-4.api-sports.io/football/teams/543.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1139465,
          referee: null,
          timezone: "UTC",
          date: "2024-01-10T00:00:00+00:00",
          timestamp: 1704844800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: null,
            name: null,
            city: null,
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 556,
          name: "Super Cup",
          country: "Spain",
          logo: "https://media-4.api-sports.io/football/leagues/556.png",
          flag: "https://media-4.api-sports.io/flags/es.svg",
          season: 2023,
          round: "Semi-finals",
        },
        teams: {
          home: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media-4.api-sports.io/football/teams/541.png",
            winner: null,
          },
          away: {
            id: 530,
            name: "Atletico Madrid",
            logo: "https://media-4.api-sports.io/football/teams/530.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/" element={loggedIn ? <Feed /> : <Home />}></Route>
      <Route
        path="/fixtures"
        element={
          <Fixtures fixtures={fixtures} previousFixtures={previousFixtures} />
        }
      >
        <Route path="/fixtures/:id" element={<FixturesModal />} />
      </Route>
      <Route path="/players" element={<Players />}>
        <Route path="/players/:id" element={<PlayersModal />} />
      </Route>
      <Route path="/la-liga" element={<LaLiga />}></Route>
      <Route path="/champions-league" element={<ChampionsLeague />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  );
}

export default App;

// let [previousMatches, setPreviousMatches] = useState([]);

// useEffect(function () {
//   async function getMatches() {
//     const notStartedResponse = await fetch(
//       "https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=541&status=NS",
//       {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "08298b375amsh62851719453f33bp15c4ddjsn140f0592a9b5",
//           "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//         },
//       }
//     );
//     const toBeDatedResponse = await fetch(
//       "https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=541&status=TBD",
//       {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "08298b375amsh62851719453f33bp15c4ddjsn140f0592a9b5",
//           "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//         },
//       }
//     );
//     const toBeDatedData = await toBeDatedResponse.json();
//     const notStartedData = await notStartedResponse.json();
//     console.log([...toBeDatedData.response, ...notStartedData.response]);
//     return [...toBeDatedData.response, ...notStartedData.response];
//   }

//   if (Matches.length === 0) {
//     setMatches(getMatches);
//   }
// }, []);
