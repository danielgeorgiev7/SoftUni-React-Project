import { useEffect } from "react";
import { formatDate } from "../../utils/DateFormatting";
import "./FixturesModal.css";
import Summary from "./Modal/Summary";
import Statistics from "./Modal/Statistics";
import Squads from "./Modal/Squads";

export function FixturesModal({
  modalOpen,
  outOfModalHandle,
  buttonClicked,
  setButtonClicked,
}) {
  useEffect(
    function () {
      if (modalOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
    [modalOpen]
  );
  // console.log(fixture);
  const fixture = {
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
    events: [
      {
        time: {
          elapsed: 25,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 19209,
          name: "F. Tomori",
        },
        assist: {
          id: 17,
          name: "C. Pulišić",
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
      {
        time: {
          elapsed: 32,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 56396,
          name: "Junior Messias",
        },
        assist: {
          id: 263812,
          name: "L. Romero",
        },
        type: "subst",
        detail: "Substitution 1",
        comments: null,
      },
      {
        time: {
          elapsed: 42,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 263812,
          name: "L. Romero",
        },
        assist: {
          id: 1627,
          name: "D. Calabria",
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 757,
          name: "Lucas Vázquez",
        },
        assist: {
          id: 733,
          name: "Dani Carvajal",
        },
        type: "subst",
        detail: "Substitution 1",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 744,
          name: "Brahim Díaz",
        },
        assist: {
          id: 10009,
          name: "Rodrygo",
        },
        type: "subst",
        detail: "Substitution 2",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 653,
          name: "F. Mendy",
        },
        assist: {
          id: 736,
          name: "Fran García",
        },
        type: "subst",
        detail: "Substitution 3",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 18907,
          name: "Joselu",
        },
        assist: {
          id: 762,
          name: "Vinícius Júnior",
        },
        type: "subst",
        detail: "Substitution 4",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 2207,
          name: "E. Camavinga",
        },
        assist: {
          id: 754,
          name: "L. Modrić",
        },
        type: "subst",
        detail: "Substitution 5",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 735,
          name: "Nacho",
        },
        assist: {
          id: 505,
          name: "D. Alaba",
        },
        type: "subst",
        detail: "Substitution 6",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 752,
          name: "T. Kroos",
        },
        assist: {
          id: 1271,
          name: "A. Tchouaméni",
        },
        type: "subst",
        detail: "Substitution 7",
        comments: null,
      },
      {
        time: {
          elapsed: 46,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 372,
          name: "Éder Militão",
        },
        assist: {
          id: 2285,
          name: "A. Rüdiger",
        },
        type: "subst",
        detail: "Substitution 8",
        comments: null,
      },
      {
        time: {
          elapsed: 47,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 263812,
          name: "L. Romero",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: null,
      },
      {
        time: {
          elapsed: 57,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 756,
          name: "F. Valverde",
        },
        assist: {
          id: 10009,
          name: "Rodrygo",
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
      {
        time: {
          elapsed: 59,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 756,
          name: "F. Valverde",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
      {
        time: {
          elapsed: 64,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 129718,
          name: "J. Bellingham",
        },
        assist: {
          id: 350037,
          name: "N. Paz",
        },
        type: "subst",
        detail: "Substitution 9",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 31054,
          name: "R. Krunić",
        },
        assist: {
          id: 36902,
          name: "T. Reijnders",
        },
        type: "subst",
        detail: "Substitution 2",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 31273,
          name: "T. Pobega",
        },
        assist: {
          id: 147859,
          name: "C. De Ketelaere",
        },
        type: "subst",
        detail: "Substitution 3",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 769,
          name: "A. Florenzi",
        },
        assist: {
          id: 1417,
          name: "A. Saelemaekers",
        },
        type: "subst",
        detail: "Substitution 4",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 1627,
          name: "D. Calabria",
        },
        assist: {
          id: 47300,
          name: "T. Hernández",
        },
        type: "subst",
        detail: "Substitution 5",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 17,
          name: "C. Pulišić",
        },
        assist: {
          id: 22236,
          name: "Rafael Leão",
        },
        type: "subst",
        detail: "Substitution 6",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 31069,
          name: "M. Sportiello",
        },
        assist: {
          id: 22221,
          name: "M. Maignan",
        },
        type: "subst",
        detail: "Substitution 7",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 263481,
          name: "L. Colombo",
        },
        assist: {
          id: 2295,
          name: "O. Giroud",
        },
        type: "subst",
        detail: "Substitution 8",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 2292,
          name: "R. Loftus-Cheek",
        },
        assist: {
          id: 1265,
          name: "Y. Adli",
        },
        type: "subst",
        detail: "Substitution 9",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 371910,
          name: "J. Šimić",
        },
        assist: {
          id: 2045,
          name: "S. Kjær",
        },
        type: "subst",
        detail: "Substitution 10",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        player: {
          id: 19209,
          name: "F. Tomori",
        },
        assist: {
          id: 163189,
          name: "M. Thiaw",
        },
        type: "subst",
        detail: "Substitution 11",
        comments: null,
      },
      {
        time: {
          elapsed: 84,
          extra: null,
        },
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        player: {
          id: 762,
          name: "Vinícius Júnior",
        },
        assist: {
          id: 754,
          name: "L. Modrić",
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
    ],
    lineups: [
      {
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
          colors: {
            player: {
              primary: "ffffff",
              number: "000000",
              border: "ffffff",
            },
            goalkeeper: {
              primary: "000000",
              number: "ffffff",
              border: "000000",
            },
          },
        },
        coach: {
          id: 2407,
          name: "C. Ancelotti",
          photo: "https://media-4.api-sports.io/football/coachs/2407.png",
        },
        formation: "4-3-1-2",
        startXI: [
          {
            player: {
              id: 47400,
              name: "A. Lunin",
              number: 13,
              pos: "G",
              grid: "1:1",
            },
          },
          {
            player: {
              id: 757,
              name: "Lucas Vázquez",
              number: 17,
              pos: "D",
              grid: "2:4",
            },
          },
          {
            player: {
              id: 372,
              name: "Éder Militão",
              number: 3,
              pos: "D",
              grid: "2:3",
            },
          },
          {
            player: {
              id: 735,
              name: "Nacho",
              number: 6,
              pos: "D",
              grid: "2:2",
            },
          },
          {
            player: {
              id: 653,
              name: "F. Mendy",
              number: 23,
              pos: "D",
              grid: "2:1",
            },
          },
          {
            player: {
              id: 756,
              name: "F. Valverde",
              number: 15,
              pos: "M",
              grid: "3:3",
            },
          },
          {
            player: {
              id: 752,
              name: "T. Kroos",
              number: 8,
              pos: "M",
              grid: "3:2",
            },
          },
          {
            player: {
              id: 2207,
              name: "E. Camavinga",
              number: 12,
              pos: "M",
              grid: "3:1",
            },
          },
          {
            player: {
              id: 129718,
              name: "J. Bellingham",
              number: 5,
              pos: "M",
              grid: "4:1",
            },
          },
          {
            player: {
              id: 18907,
              name: "Joselu",
              number: 14,
              pos: "F",
              grid: "5:2",
            },
          },
          {
            player: {
              id: 744,
              name: "Brahim Díaz",
              number: 21,
              pos: "F",
              grid: "5:1",
            },
          },
        ],
        substitutes: [
          {
            player: {
              id: 733,
              name: "Dani Carvajal",
              number: 2,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 10009,
              name: "Rodrygo",
              number: 11,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 736,
              name: "Fran García",
              number: 20,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 762,
              name: "Vinícius Júnior",
              number: 7,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 754,
              name: "L. Modrić",
              number: 10,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 505,
              name: "D. Alaba",
              number: 4,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 1271,
              name: "A. Tchouaméni",
              number: 18,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 2285,
              name: "A. Rüdiger",
              number: 22,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 350037,
              name: "N. Paz",
              number: 27,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 334575,
              name: "Diego Piñeiro",
              number: 26,
              pos: "G",
              grid: null,
            },
          },
          {
            player: {
              id: 291964,
              name: "A. Güler",
              number: 24,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 737,
              name: "Odriozola",
              number: 16,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 730,
              name: "T. Courtois",
              number: 1,
              pos: "G",
              grid: null,
            },
          },
        ],
      },
      {
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
          colors: {
            player: {
              primary: "dcdcc5",
              number: "000000",
              border: "dcdcc5",
            },
            goalkeeper: {
              primary: "000000",
              number: "ffffff",
              border: "000000",
            },
          },
        },
        coach: {
          id: 3733,
          name: "S. Pioli",
          photo: "https://media-4.api-sports.io/football/coachs/3733.png",
        },
        formation: "4-2-3-1",
        startXI: [
          {
            player: {
              id: 31069,
              name: "M. Sportiello",
              number: 57,
              pos: "G",
              grid: "1:1",
            },
          },
          {
            player: {
              id: 1627,
              name: "D. Calabria",
              number: 2,
              pos: "D",
              grid: "2:4",
            },
          },
          {
            player: {
              id: 371910,
              name: "J. Šimić",
              number: 82,
              pos: "D",
              grid: "2:3",
            },
          },
          {
            player: {
              id: 19209,
              name: "F. Tomori",
              number: 23,
              pos: "D",
              grid: "2:2",
            },
          },
          {
            player: {
              id: 769,
              name: "A. Florenzi",
              number: 25,
              pos: "D",
              grid: "2:1",
            },
          },
          {
            player: {
              id: 31054,
              name: "R. Krunić",
              number: 33,
              pos: "M",
              grid: "3:2",
            },
          },
          {
            player: {
              id: 31273,
              name: "T. Pobega",
              number: 32,
              pos: "M",
              grid: "3:1",
            },
          },
          {
            player: {
              id: 56396,
              name: "Junior Messias",
              number: 30,
              pos: "M",
              grid: "4:3",
            },
          },
          {
            player: {
              id: 2292,
              name: "R. Loftus-Cheek",
              number: 8,
              pos: "M",
              grid: "4:2",
            },
          },
          {
            player: {
              id: 17,
              name: "C. Pulišić",
              number: 11,
              pos: "M",
              grid: "4:1",
            },
          },
          {
            player: {
              id: 263481,
              name: "L. Colombo",
              number: 29,
              pos: "F",
              grid: "5:1",
            },
          },
        ],
        substitutes: [
          {
            player: {
              id: 263812,
              name: "L. Romero",
              number: 18,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 163189,
              name: "M. Thiaw",
              number: 28,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 2045,
              name: "S. Kjær",
              number: 24,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 36902,
              name: "T. Reijnders",
              number: 14,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 1265,
              name: "Y. Adli",
              number: 7,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 2295,
              name: "O. Giroud",
              number: 9,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 22221,
              name: "M. Maignan",
              number: 16,
              pos: "G",
              grid: null,
            },
          },
          {
            player: {
              id: 22236,
              name: "Rafael Leão",
              number: 10,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 47300,
              name: "T. Hernández",
              number: 19,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 1417,
              name: "A. Saelemaekers",
              number: 56,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 147859,
              name: "C. De Ketelaere",
              number: 90,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 297579,
              name: "C. Traorè",
              number: 70,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 765,
              name: "A. Mirante",
              number: 83,
              pos: "G",
              grid: null,
            },
          },
          {
            player: {
              id: 382945,
              name: "K. Zeroli",
              number: 85,
              pos: null,
              grid: null,
            },
          },
          {
            player: {
              id: 374359,
              name: "D. Bartesaghi",
              number: 95,
              pos: null,
              grid: null,
            },
          },
        ],
      },
    ],
    statistics: [
      {
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        statistics: [
          {
            type: "Shots on Goal",
            value: 5,
          },
          {
            type: "Shots off Goal",
            value: 2,
          },
          {
            type: "Total Shots",
            value: 13,
          },
          {
            type: "Blocked Shots",
            value: 6,
          },
          {
            type: "Shots insidebox",
            value: 7,
          },
          {
            type: "Shots outsidebox",
            value: 6,
          },
          {
            type: "Fouls",
            value: 11,
          },
          {
            type: "Corner Kicks",
            value: 5,
          },
          {
            type: "Offsides",
            value: null,
          },
          {
            type: "Ball Possession",
            value: "60%",
          },
          {
            type: "Yellow Cards",
            value: null,
          },
          {
            type: "Red Cards",
            value: null,
          },
          {
            type: "Goalkeeper Saves",
            value: 1,
          },
          {
            type: "Total passes",
            value: 602,
          },
          {
            type: "Passes accurate",
            value: 533,
          },
          {
            type: "Passes %",
            value: "89%",
          },
          {
            type: "expected_goals",
            value: null,
          },
        ],
      },
      {
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        statistics: [
          {
            type: "Shots on Goal",
            value: 3,
          },
          {
            type: "Shots off Goal",
            value: 5,
          },
          {
            type: "Total Shots",
            value: 11,
          },
          {
            type: "Blocked Shots",
            value: 3,
          },
          {
            type: "Shots insidebox",
            value: 6,
          },
          {
            type: "Shots outsidebox",
            value: 5,
          },
          {
            type: "Fouls",
            value: 12,
          },
          {
            type: "Corner Kicks",
            value: 4,
          },
          {
            type: "Offsides",
            value: 1,
          },
          {
            type: "Ball Possession",
            value: "40%",
          },
          {
            type: "Yellow Cards",
            value: 1,
          },
          {
            type: "Red Cards",
            value: null,
          },
          {
            type: "Goalkeeper Saves",
            value: 2,
          },
          {
            type: "Total passes",
            value: 404,
          },
          {
            type: "Passes accurate",
            value: 345,
          },
          {
            type: "Passes %",
            value: "85%",
          },
          {
            type: "expected_goals",
            value: null,
          },
        ],
      },
    ],
    players: [
      {
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
          update: "2023-07-24T13:30:04+00:00",
        },
        players: [
          {
            player: {
              id: 47400,
              name: "Andriy Lunin",
              photo: "https://media-4.api-sports.io/football/players/47400.png",
            },
            statistics: [
              {
                games: {
                  minutes: 94,
                  number: 13,
                  position: "G",
                  rating: "6.7",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 2,
                  assists: null,
                  saves: 1,
                },
                passes: {
                  total: 37,
                  key: 1,
                  accuracy: "33",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: 0,
                },
              },
            ],
          },
          {
            player: {
              id: 757,
              name: "Lucas Vázquez",
              photo: "https://media-4.api-sports.io/football/players/757.png",
            },
            statistics: [
              {
                games: {
                  minutes: 45,
                  number: 17,
                  position: "D",
                  rating: "6.6",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 37,
                  key: 1,
                  accuracy: "31",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 3,
                  won: 2,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 372,
              name: "Éder Militão",
              photo: "https://media-4.api-sports.io/football/players/372.png",
            },
            statistics: [
              {
                games: {
                  minutes: 45,
                  number: 3,
                  position: "D",
                  rating: "7",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 38,
                  key: null,
                  accuracy: "35",
                },
                tackles: {
                  total: 1,
                  blocks: 1,
                  interceptions: null,
                },
                duels: {
                  total: 6,
                  won: 5,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 735,
              name: "Nacho Fernández",
              photo: "https://media-4.api-sports.io/football/players/735.png",
            },
            statistics: [
              {
                games: {
                  minutes: 45,
                  number: 6,
                  position: "D",
                  rating: "6.5",
                  captain: true,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 41,
                  key: null,
                  accuracy: "39",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 1,
                  won: 1,
                },
                dribbles: {
                  attempts: 1,
                  success: 1,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 653,
              name: "Ferland Mendy",
              photo: "https://media-4.api-sports.io/football/players/653.png",
            },
            statistics: [
              {
                games: {
                  minutes: 45,
                  number: 23,
                  position: "D",
                  rating: "6.5",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 38,
                  key: null,
                  accuracy: "37",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 5,
                  won: 2,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 756,
              name: "Federico Valverde",
              photo: "https://media-4.api-sports.io/football/players/756.png",
            },
            statistics: [
              {
                games: {
                  minutes: 94,
                  number: 15,
                  position: "M",
                  rating: "9",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 3,
                  on: 2,
                },
                goals: {
                  total: 2,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 54,
                  key: null,
                  accuracy: "45",
                },
                tackles: {
                  total: 3,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 6,
                  won: 5,
                },
                dribbles: {
                  attempts: 1,
                  success: 1,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 752,
              name: "Toni Kroos",
              photo: "https://media-4.api-sports.io/football/players/752.png",
            },
            statistics: [
              {
                games: {
                  minutes: 45,
                  number: 8,
                  position: "M",
                  rating: "7.3",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 48,
                  key: 1,
                  accuracy: "44",
                },
                tackles: {
                  total: 4,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 5,
                  won: 5,
                },
                dribbles: {
                  attempts: 1,
                  success: 1,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 2207,
              name: "Eduardo Camavinga",
              photo: "https://media-4.api-sports.io/football/players/2207.png",
            },
            statistics: [
              {
                games: {
                  minutes: 45,
                  number: 12,
                  position: "M",
                  rating: "7.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 34,
                  key: 1,
                  accuracy: "31",
                },
                tackles: {
                  total: 2,
                  blocks: 1,
                  interceptions: 1,
                },
                duels: {
                  total: 6,
                  won: 4,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 2,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 129718,
              name: "Jude Bellingham",
              photo:
                "https://media-4.api-sports.io/football/players/129718.png",
            },
            statistics: [
              {
                games: {
                  minutes: 64,
                  number: 5,
                  position: "M",
                  rating: "7.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 46,
                  key: 2,
                  accuracy: "40",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 7,
                  won: 5,
                },
                dribbles: {
                  attempts: 5,
                  success: 4,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 18907,
              name: "Joselu",
              photo: "https://media-4.api-sports.io/football/players/18907.png",
            },
            statistics: [
              {
                games: {
                  minutes: 45,
                  number: 14,
                  position: "F",
                  rating: "6.7",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 12,
                  key: null,
                  accuracy: "10",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 3,
                  won: 2,
                },
                dribbles: {
                  attempts: 1,
                  success: 1,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 744,
              name: "Brahim Díaz",
              photo: "https://media-4.api-sports.io/football/players/744.png",
            },
            statistics: [
              {
                games: {
                  minutes: 45,
                  number: 21,
                  position: "F",
                  rating: "6.9",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 13,
                  key: 1,
                  accuracy: "11",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 5,
                  won: 3,
                },
                dribbles: {
                  attempts: 1,
                  success: 1,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 733,
              name: "Daniel Carvajal",
              photo: "https://media-4.api-sports.io/football/players/733.png",
            },
            statistics: [
              {
                games: {
                  minutes: 49,
                  number: 2,
                  position: "D",
                  rating: "7",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 26,
                  key: 1,
                  accuracy: "22",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: 2,
                },
                duels: {
                  total: 5,
                  won: 3,
                },
                dribbles: {
                  attempts: 1,
                  success: 1,
                  past: 2,
                },
                fouls: {
                  drawn: 1,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 2285,
              name: "Antonio Rüdiger",
              photo: "https://media-4.api-sports.io/football/players/2285.png",
            },
            statistics: [
              {
                games: {
                  minutes: 49,
                  number: 22,
                  position: "D",
                  rating: "6.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 25,
                  key: null,
                  accuracy: "20",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 5,
                  won: 3,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: 1,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 736,
              name: "Fran García",
              photo: "https://media-4.api-sports.io/football/players/736.png",
            },
            statistics: [
              {
                games: {
                  minutes: 49,
                  number: 20,
                  position: "D",
                  rating: "6.7",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 30,
                  key: null,
                  accuracy: "26",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 4,
                  won: 1,
                },
                dribbles: {
                  attempts: 1,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 2,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 505,
              name: "David Alaba",
              photo: "https://media-4.api-sports.io/football/players/505.png",
            },
            statistics: [
              {
                games: {
                  minutes: 49,
                  number: 4,
                  position: "D",
                  rating: "6.6",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 31,
                  key: null,
                  accuracy: "28",
                },
                tackles: {
                  total: null,
                  blocks: 1,
                  interceptions: null,
                },
                duels: {
                  total: 1,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 1271,
              name: "Aurélien Tchouaméni",
              photo: "https://media-4.api-sports.io/football/players/1271.png",
            },
            statistics: [
              {
                games: {
                  minutes: 49,
                  number: 18,
                  position: "M",
                  rating: "6.7",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 22,
                  key: null,
                  accuracy: "20",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: 2,
                },
                duels: {
                  total: 1,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 754,
              name: "Luka Modrić",
              photo: "https://media-4.api-sports.io/football/players/754.png",
            },
            statistics: [
              {
                games: {
                  minutes: 49,
                  number: 10,
                  position: "M",
                  rating: "7.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: 1,
                  saves: null,
                },
                passes: {
                  total: 33,
                  key: 2,
                  accuracy: "29",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 4,
                  won: 1,
                },
                dribbles: {
                  attempts: 1,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 762,
              name: "Vinícius Júnior",
              photo: "https://media-4.api-sports.io/football/players/762.png",
            },
            statistics: [
              {
                games: {
                  minutes: 49,
                  number: 7,
                  position: "F",
                  rating: "7.2",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: 2,
                  on: 2,
                },
                goals: {
                  total: 1,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 13,
                  key: null,
                  accuracy: "10",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 14,
                  won: 5,
                },
                dribbles: {
                  attempts: 8,
                  success: 4,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 10009,
              name: "Rodrygo",
              photo: "https://media-4.api-sports.io/football/players/10009.png",
            },
            statistics: [
              {
                games: {
                  minutes: 49,
                  number: 11,
                  position: "F",
                  rating: "7.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: 1,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: 1,
                  saves: null,
                },
                passes: {
                  total: 14,
                  key: 2,
                  accuracy: "12",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 4,
                  won: 2,
                },
                dribbles: {
                  attempts: 3,
                  success: 2,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 350037,
              name: "Nico Paz",
              photo:
                "https://media-4.api-sports.io/football/players/350037.png",
            },
            statistics: [
              {
                games: {
                  minutes: 30,
                  number: 27,
                  position: "M",
                  rating: "6.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 10,
                  key: null,
                  accuracy: "10",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 5,
                  won: 2,
                },
                dribbles: {
                  attempts: 3,
                  success: 1,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 334575,
              name: "Diego Piñeiro",
              photo:
                "https://media-4.api-sports.io/football/players/334575.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 26,
                  position: "G",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 730,
              name: "Thibaut Courtois",
              photo: "https://media-4.api-sports.io/football/players/730.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 1,
                  position: "G",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 737,
              name: "Álvaro Odriozola",
              photo: "https://media-4.api-sports.io/football/players/737.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 16,
                  position: "D",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 291964,
              name: "Arda Güler",
              photo:
                "https://media-4.api-sports.io/football/players/291964.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 24,
                  position: "M",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
        ],
      },
      {
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
          update: "2023-07-24T13:30:04+00:00",
        },
        players: [
          {
            player: {
              id: 31069,
              name: "Marco Sportiello",
              photo: "https://media-4.api-sports.io/football/players/31069.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 57,
                  position: "G",
                  rating: "6.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 2,
                  assists: null,
                  saves: 2,
                },
                passes: {
                  total: 18,
                  key: null,
                  accuracy: "16",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: 0,
                },
              },
            ],
          },
          {
            player: {
              id: 1627,
              name: "Davide Calabria",
              photo: "https://media-4.api-sports.io/football/players/1627.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 2,
                  position: "D",
                  rating: "6.9",
                  captain: true,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: 1,
                  saves: null,
                },
                passes: {
                  total: 41,
                  key: 1,
                  accuracy: "35",
                },
                tackles: {
                  total: 3,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 4,
                  won: 3,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 371910,
              name: "Jan-Carlo Simic",
              photo:
                "https://media-4.api-sports.io/football/players/371910.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 82,
                  position: "D",
                  rating: "6.3",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 23,
                  key: null,
                  accuracy: "21",
                },
                tackles: {
                  total: 1,
                  blocks: 1,
                  interceptions: null,
                },
                duels: {
                  total: 3,
                  won: 1,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 19209,
              name: "Fikayo Tomori",
              photo: "https://media-4.api-sports.io/football/players/19209.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 23,
                  position: "D",
                  rating: "6.6",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: 1,
                },
                goals: {
                  total: 1,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 33,
                  key: null,
                  accuracy: "27",
                },
                tackles: {
                  total: 1,
                  blocks: 1,
                  interceptions: null,
                },
                duels: {
                  total: 2,
                  won: 1,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 769,
              name: "Alessandro Florenzi",
              photo: "https://media-4.api-sports.io/football/players/769.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 25,
                  position: "D",
                  rating: "6.5",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 42,
                  key: null,
                  accuracy: "35",
                },
                tackles: {
                  total: 1,
                  blocks: 1,
                  interceptions: 2,
                },
                duels: {
                  total: 5,
                  won: 1,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 3,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 31054,
              name: "Rade Krunić",
              photo: "https://media-4.api-sports.io/football/players/31054.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 33,
                  position: "M",
                  rating: "7.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 38,
                  key: null,
                  accuracy: "33",
                },
                tackles: {
                  total: 5,
                  blocks: null,
                  interceptions: 3,
                },
                duels: {
                  total: 7,
                  won: 6,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 31273,
              name: "Tommaso Pobega",
              photo: "https://media-4.api-sports.io/football/players/31273.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 32,
                  position: "M",
                  rating: "6.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 20,
                  key: null,
                  accuracy: "16",
                },
                tackles: {
                  total: null,
                  blocks: 1,
                  interceptions: null,
                },
                duels: {
                  total: 6,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 3,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 56396,
              name: "Junior Messias",
              photo: "https://media-4.api-sports.io/football/players/56396.png",
            },
            statistics: [
              {
                games: {
                  minutes: 32,
                  number: 30,
                  position: "M",
                  rating: "6.6",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 6,
                  key: null,
                  accuracy: "5",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 5,
                  won: 2,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: 1,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 2292,
              name: "Ruben Loftus-Cheek",
              photo: "https://media-4.api-sports.io/football/players/2292.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 8,
                  position: "M",
                  rating: "6.3",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 20,
                  key: 1,
                  accuracy: "15",
                },
                tackles: {
                  total: 2,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 8,
                  won: 3,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: 1,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 17,
              name: "Christian Pulišić",
              photo: "https://media-4.api-sports.io/football/players/17.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 11,
                  position: "M",
                  rating: "6.6",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: 1,
                  saves: null,
                },
                passes: {
                  total: 23,
                  key: 3,
                  accuracy: "20",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 12,
                  won: 3,
                },
                dribbles: {
                  attempts: 4,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 2,
                  committed: 3,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 263481,
              name: "Lorenzo Colombo",
              photo:
                "https://media-4.api-sports.io/football/players/263481.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 29,
                  position: "F",
                  rating: "6.7",
                  captain: false,
                  substitute: false,
                },
                offsides: 1,
                shots: {
                  total: 1,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 18,
                  key: null,
                  accuracy: "12",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 7,
                  won: 3,
                },
                dribbles: {
                  attempts: 1,
                  success: 1,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 263812,
              name: "Luka Romero",
              photo:
                "https://media-4.api-sports.io/football/players/263812.png",
            },
            statistics: [
              {
                games: {
                  minutes: 62,
                  number: 18,
                  position: "M",
                  rating: "7.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: 3,
                  on: 1,
                },
                goals: {
                  total: 1,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 15,
                  key: null,
                  accuracy: "12",
                },
                tackles: {
                  total: 2,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 8,
                  won: 4,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: 2,
                  committed: 1,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 22221,
              name: "Mike Maignan",
              photo: "https://media-4.api-sports.io/football/players/22221.png",
            },
            statistics: [
              {
                games: {
                  minutes: 24,
                  number: 16,
                  position: "G",
                  rating: "6.2",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 1,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 9,
                  key: null,
                  accuracy: "9",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 2,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 2,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: 0,
                },
              },
            ],
          },
          {
            player: {
              id: 2045,
              name: "Simon Kjær",
              photo: "https://media-4.api-sports.io/football/players/2045.png",
            },
            statistics: [
              {
                games: {
                  minutes: 24,
                  number: 24,
                  position: "D",
                  rating: "6.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 13,
                  key: null,
                  accuracy: "12",
                },
                tackles: {
                  total: 1,
                  blocks: 1,
                  interceptions: null,
                },
                duels: {
                  total: 2,
                  won: 1,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 163189,
              name: "Malick Thiaw",
              photo:
                "https://media-4.api-sports.io/football/players/163189.png",
            },
            statistics: [
              {
                games: {
                  minutes: 24,
                  number: 28,
                  position: "D",
                  rating: "6.6",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 8,
                  key: null,
                  accuracy: "7",
                },
                tackles: {
                  total: 1,
                  blocks: 1,
                  interceptions: null,
                },
                duels: {
                  total: 2,
                  won: 2,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 47300,
              name: "Theo Hernández",
              photo: "https://media-4.api-sports.io/football/players/47300.png",
            },
            statistics: [
              {
                games: {
                  minutes: 24,
                  number: 19,
                  position: "D",
                  rating: "6.7",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 10,
                  key: null,
                  accuracy: "10",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 1,
                  won: 1,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 22236,
              name: "Rafael Leão",
              photo: "https://media-4.api-sports.io/football/players/22236.png",
            },
            statistics: [
              {
                games: {
                  minutes: 24,
                  number: 10,
                  position: "F",
                  rating: "7",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 10,
                  key: 2,
                  accuracy: "6",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 4,
                  won: 2,
                },
                dribbles: {
                  attempts: 3,
                  success: 2,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 36902,
              name: "Tijjani Reijnders",
              photo: "https://media-4.api-sports.io/football/players/36902.png",
            },
            statistics: [
              {
                games: {
                  minutes: 24,
                  number: 14,
                  position: "M",
                  rating: "6.7",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 9,
                  key: null,
                  accuracy: "8",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 1265,
              name: "Yacine Adli",
              photo: "https://media-4.api-sports.io/football/players/1265.png",
            },
            statistics: [
              {
                games: {
                  minutes: 24,
                  number: 7,
                  position: "M",
                  rating: "6.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 18,
                  key: null,
                  accuracy: "18",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: 2,
                },
                duels: {
                  total: 2,
                  won: null,
                },
                dribbles: {
                  attempts: 1,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 1417,
              name: "Alexis Saelemaekers",
              photo: "https://media-4.api-sports.io/football/players/1417.png",
            },
            statistics: [
              {
                games: {
                  minutes: 24,
                  number: 56,
                  position: "M",
                  rating: "6.9",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 12,
                  key: null,
                  accuracy: "11",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 3,
                  won: 3,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 2,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 147859,
              name: "Charles De Ketelaere",
              photo:
                "https://media-4.api-sports.io/football/players/147859.png",
            },
            statistics: [
              {
                games: {
                  minutes: 24,
                  number: 90,
                  position: "M",
                  rating: "6.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 12,
                  key: null,
                  accuracy: "12",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 3,
                  won: 1,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 2295,
              name: "Olivier Giroud",
              photo: "https://media-4.api-sports.io/football/players/2295.png",
            },
            statistics: [
              {
                games: {
                  minutes: 24,
                  number: 9,
                  position: "F",
                  rating: "6.2",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: 2,
                  on: 1,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 6,
                  key: null,
                  accuracy: "5",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 3,
                  won: 1,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: 1,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 765,
              name: "Antonio Mirante",
              photo: "https://media-4.api-sports.io/football/players/765.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 83,
                  position: "G",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 0,
              name: "Davide Bartesaghi",
              photo: null,
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 95,
                  position: "D",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 0,
              name: "Kevin Zeroli",
              photo: null,
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 85,
                  position: "M",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 297579,
              name: "Chaka Traorè",
              photo:
                "https://media-4.api-sports.io/football/players/297579.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 70,
                  position: "F",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
        ],
      },
    ],
  };

  if (!fixture) return;
  const homeLineups = Object.values(
    fixture.lineups.filter((lineup) => lineup.team.id === 541 && lineup)
  )["0"];
  const awayLineups = Object.values(
    fixture.lineups.filter((lineup) => lineup.team.id === 489 && lineup)
  )[["0"]];
  const date = formatDate(fixture.fixture.date);
  let display1 = null;
  let display2 = null;
  if (fixture.league.name === "UEFA Champions League") {
    [display1, display2] = fixture.league.round.split(" - ");
    display1 = " - " + display1;
    display2 = " - " + display2 + " of 6";
  }
  if (fixture.league.name === "La Liga") {
    display1 = " - Round ";
    display2 = fixture.league.round.split(" - ")[1];
  }
  if (fixture.league.name === "Friendlies Clubs") {
    display1 = "Club Friendlies";
    display2 = "";
  }

  return (
    <>
      <div
        className={modalOpen ? "modal-outside-blur" : "hidden"}
        onClick={outOfModalHandle}
      ></div>

      <div className={`modal-wrapper${!modalOpen ? " hidden" : ""}`}>
        <div className="modal">
          <div className="modal-content">
            <a className="x-button" onClick={outOfModalHandle}>
              ×
            </a>
            <img
              src={
                (fixture.fixture.id === 1030303 &&
                  "/rose-bowl-california.jpg") ||
                (fixture.fixture.id === 1030312 && "/nrg-stadium-texas.jpg") ||
                (fixture.fixture.id === 1030323 &&
                  "/camping-stadium-florida.jpg") ||
                (fixture.fixture.id === 1117081 && "/att-stadium-texas.jpg") ||
                "/" +
                  fixture.teams.home.name.toLowerCase().split(" ").join("-") +
                  ".jpg"
              }
              alt={`${fixture.teams.home.name} stadium`}
              className={`stadium-img ${
                buttonClicked === "summary" ? "stadium-img-fix" : ""
              }`}
            />
            <div className="fixtures-modal-venue">
              <p>
                <span>Venue: </span>
                {fixture.fixture.venue.name}, {fixture.fixture.venue.city}
              </p>
            </div>
            <div className="fixtures-modal-upper-info">
              <div className="span-holder">
                <span>
                  {display1 !== "Club Friendlies" &&
                    display2 !== "" &&
                    fixture.league.name}
                  {display1 !== null && display2 !== null
                    ? display1 + display2
                    : " - " + fixture.league.round}
                </span>
                <p>
                  <span>Referee: </span>
                  {fixture.fixture.referee
                    ? fixture.fixture.referee
                    : "Not Stated"}
                </p>
              </div>
              <span>{date}</span>
            </div>
            <div className="fixtures-modal-teams">
              <div
                className={`fixtures-modal-home-team ${
                  fixture.teams.home.id === 541 && "real-blue"
                } ${fixture.teams.home.winner ? "winner" : "loser"}`}
              >
                <p className="fixtures-modal-home-name">
                  {fixture.teams.home.name}
                </p>
                <img src={fixture.teams.home.logo} alt="Home team logo" />
                <span>{fixture.goals.home} </span>
              </div>
              <span>—</span>
              <div
                className={`fixtures-modal-away-team ${
                  fixture.teams.away.id === 541 && "real-blue"
                } ${fixture.teams.away.winner ? "winner" : "loser"}`}
              >
                <span>{fixture.goals.away} </span>
                <img src={fixture.teams.away.logo} alt="Away team logo" />
                <p className="fixtures-modal-away-name">
                  {fixture.teams.away.name}
                </p>
              </div>
            </div>
            <div className="more-info">
              <p>{fixture.fixture.status.long}</p>
            </div>
            {fixture.fixture.status.short.toLowerCase() === "ft" && (
              <div className="fixtures-modal-buttons">
                <button
                  className={buttonClicked === "summary" ? "isActive" : ""}
                  onClick={() => setButtonClicked("summary")}
                >
                  Summary
                </button>
                <button
                  className={buttonClicked === "stats" ? "isActive" : ""}
                  onClick={() => setButtonClicked("stats")}
                >
                  Statistics
                </button>
                <button
                  className={buttonClicked === "squads" ? "isActive" : ""}
                  onClick={() => setButtonClicked("squads")}
                >
                  Squads
                </button>
              </div>
            )}
            {buttonClicked === "summary" && (
              <Summary
                fixture={fixture}
                homeLineups={homeLineups}
                awayLineups={awayLineups}
              />
            )}
            {buttonClicked === "stats" && <Statistics fixture={fixture} />}
            {buttonClicked === "squads" && (
              <Squads
                fixture={fixture}
                homeLineups={homeLineups}
                awayLineups={awayLineups}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FixturesModal;
