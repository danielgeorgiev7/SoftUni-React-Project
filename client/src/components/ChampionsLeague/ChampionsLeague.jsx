import CLItem from "./CLItem";
import "./ChampionsLeague.css";
function ChampionsLeague() {
  const groups = [
    [
      {
        rank: 1,
        team: {
          id: 157,
          name: "Bayern Munich",
          logo: "https://media-4.api-sports.io/football/teams/157.png",
        },
        points: 12,
        goalsDiff: 5,
        group: "Group A",
        form: "WWWW",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 4,
          draw: 0,
          lose: 0,
          goals: {
            for: 11,
            against: 6,
          },
        },
        home: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 6,
            against: 4,
          },
        },
        away: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 5,
            against: 2,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 2,
        team: {
          id: 400,
          name: "FC Copenhagen",
          logo: "https://media-4.api-sports.io/football/teams/400.png",
        },
        points: 4,
        goalsDiff: -1,
        group: "Group A",
        form: "WLLD",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 1,
          draw: 1,
          lose: 2,
          goals: {
            for: 7,
            against: 8,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 5,
            against: 5,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 2,
            against: 3,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 3,
        team: {
          id: 645,
          name: "Galatasaray",
          logo: "https://media-4.api-sports.io/football/teams/645.png",
        },
        points: 4,
        goalsDiff: -2,
        group: "Group A",
        form: "LLWD",
        status: "same",
        description: "Promotion - Europa League (Play Offs: 1/16-finals)",
        all: {
          played: 4,
          win: 1,
          draw: 1,
          lose: 2,
          goals: {
            for: 7,
            against: 9,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 3,
            against: 5,
          },
        },
        away: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 4,
            against: 4,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 4,
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-4.api-sports.io/football/teams/33.png",
        },
        points: 3,
        goalsDiff: -2,
        group: "Group A",
        form: "LWLL",
        status: "same",
        description: null,
        all: {
          played: 4,
          win: 1,
          draw: 0,
          lose: 3,
          goals: {
            for: 9,
            against: 11,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 3,
            against: 3,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 6,
            against: 8,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
    ],
    [
      {
        rank: 1,
        team: {
          id: 42,
          name: "Arsenal",
          logo: "https://media-4.api-sports.io/football/teams/42.png",
        },
        points: 9,
        goalsDiff: 6,
        group: "Group B",
        form: "WWLW",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 3,
          draw: 0,
          lose: 1,
          goals: {
            for: 9,
            against: 3,
          },
        },
        home: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 6,
            against: 0,
          },
        },
        away: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 3,
            against: 3,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 2,
        team: {
          id: 197,
          name: "PSV Eindhoven",
          logo: "https://media-4.api-sports.io/football/teams/197.png",
        },
        points: 5,
        goalsDiff: -3,
        group: "Group B",
        form: "WDDL",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 1,
          draw: 2,
          lose: 1,
          goals: {
            for: 4,
            against: 7,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 1,
          lose: 0,
          goals: {
            for: 3,
            against: 2,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 1,
            against: 5,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 3,
        team: {
          id: 116,
          name: "Lens",
          logo: "https://media-4.api-sports.io/football/teams/116.png",
        },
        points: 5,
        goalsDiff: 0,
        group: "Group B",
        form: "LDWD",
        status: "same",
        description: "Promotion - Europa League (Play Offs: 1/16-finals)",
        all: {
          played: 4,
          win: 1,
          draw: 2,
          lose: 1,
          goals: {
            for: 4,
            against: 4,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 1,
          lose: 0,
          goals: {
            for: 3,
            against: 2,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 1,
            against: 2,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 4,
        team: {
          id: 536,
          name: "Sevilla",
          logo: "https://media-4.api-sports.io/football/teams/536.png",
        },
        points: 2,
        goalsDiff: -3,
        group: "Group B",
        form: "LLDD",
        status: "same",
        description: null,
        all: {
          played: 4,
          win: 0,
          draw: 2,
          lose: 2,
          goals: {
            for: 4,
            against: 7,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 2,
            against: 3,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 2,
            against: 4,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
    ],
    [
      {
        rank: 1,
        team: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media-4.api-sports.io/football/teams/541.png",
        },
        points: 12,
        goalsDiff: 6,
        group: "Group C",
        form: "WWWW",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 4,
          draw: 0,
          lose: 0,
          goals: {
            for: 9,
            against: 3,
          },
        },
        home: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 4,
            against: 0,
          },
        },
        away: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 5,
            against: 3,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 2,
        team: {
          id: 492,
          name: "Napoli",
          logo: "https://media-4.api-sports.io/football/teams/492.png",
        },
        points: 7,
        goalsDiff: 1,
        group: "Group C",
        form: "DWLW",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 2,
          draw: 1,
          lose: 1,
          goals: {
            for: 6,
            against: 5,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 3,
            against: 4,
          },
        },
        away: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 3,
            against: 1,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 3,
        team: {
          id: 217,
          name: "SC Braga",
          logo: "https://media-4.api-sports.io/football/teams/217.png",
        },
        points: 3,
        goalsDiff: -4,
        group: "Group C",
        form: "LLWL",
        status: "same",
        description: "Promotion - Europa League (Play Offs: 1/16-finals)",
        all: {
          played: 4,
          win: 1,
          draw: 0,
          lose: 3,
          goals: {
            for: 5,
            against: 9,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 2,
            against: 4,
          },
        },
        away: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 3,
            against: 5,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 4,
        team: {
          id: 182,
          name: "Union Berlin",
          logo: "https://media-4.api-sports.io/football/teams/182.png",
        },
        points: 1,
        goalsDiff: -3,
        group: "Group C",
        form: "DLLL",
        status: "same",
        description: null,
        all: {
          played: 4,
          win: 0,
          draw: 1,
          lose: 3,
          goals: {
            for: 3,
            against: 6,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 2,
            against: 4,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 1,
            against: 2,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
    ],
    [
      {
        rank: 1,
        team: {
          id: 548,
          name: "Real Sociedad",
          logo: "https://media-4.api-sports.io/football/teams/548.png",
        },
        points: 10,
        goalsDiff: 5,
        group: "Group D",
        form: "WWWD",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 3,
          draw: 1,
          lose: 0,
          goals: {
            for: 7,
            against: 2,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 1,
          lose: 0,
          goals: {
            for: 4,
            against: 2,
          },
        },
        away: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 3,
            against: 0,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 2,
        team: {
          id: 505,
          name: "Inter",
          logo: "https://media-4.api-sports.io/football/teams/505.png",
        },
        points: 10,
        goalsDiff: 3,
        group: "Group D",
        form: "WWWD",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 3,
          draw: 1,
          lose: 0,
          goals: {
            for: 5,
            against: 2,
          },
        },
        home: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 3,
            against: 1,
          },
        },
        away: {
          played: 2,
          win: 1,
          draw: 1,
          lose: 0,
          goals: {
            for: 2,
            against: 1,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 3,
        team: {
          id: 571,
          name: "Red Bull Salzburg",
          logo: "https://media-4.api-sports.io/football/teams/571.png",
        },
        points: 3,
        goalsDiff: -2,
        group: "Group D",
        form: "LLLW",
        status: "same",
        description: "Promotion - Europa League (Play Offs: 1/16-finals)",
        all: {
          played: 4,
          win: 1,
          draw: 0,
          lose: 3,
          goals: {
            for: 3,
            against: 5,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 0,
            against: 3,
          },
        },
        away: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 3,
            against: 2,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 4,
        team: {
          id: 211,
          name: "Benfica",
          logo: "https://media-4.api-sports.io/football/teams/211.png",
        },
        points: 0,
        goalsDiff: -6,
        group: "Group D",
        form: "LLLL",
        status: "same",
        description: null,
        all: {
          played: 4,
          win: 0,
          draw: 0,
          lose: 4,
          goals: {
            for: 1,
            against: 7,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 0,
            against: 3,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 1,
            against: 4,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
    ],
    [
      {
        rank: 1,
        team: {
          id: 530,
          name: "Atletico Madrid",
          logo: "https://media-4.api-sports.io/football/teams/530.png",
        },
        points: 8,
        goalsDiff: 7,
        group: "Group E",
        form: "WDWD",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 2,
          draw: 2,
          lose: 0,
          goals: {
            for: 12,
            against: 5,
          },
        },
        home: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 9,
            against: 2,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 2,
          lose: 0,
          goals: {
            for: 3,
            against: 3,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 2,
        team: {
          id: 487,
          name: "Lazio",
          logo: "https://media-4.api-sports.io/football/teams/487.png",
        },
        points: 7,
        goalsDiff: 0,
        group: "Group E",
        form: "WLWD",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 2,
          draw: 1,
          lose: 1,
          goals: {
            for: 5,
            against: 5,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 1,
          lose: 0,
          goals: {
            for: 2,
            against: 1,
          },
        },
        away: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 3,
            against: 4,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 3,
        team: {
          id: 209,
          name: "Feyenoord",
          logo: "https://media-4.api-sports.io/football/teams/209.png",
        },
        points: 6,
        goalsDiff: 2,
        group: "Group E",
        form: "LWLW",
        status: "same",
        description: "Promotion - Europa League (Play Offs: 1/16-finals)",
        all: {
          played: 4,
          win: 2,
          draw: 0,
          lose: 2,
          goals: {
            for: 7,
            against: 5,
          },
        },
        home: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 5,
            against: 1,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 2,
            against: 4,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 4,
        team: {
          id: 247,
          name: "Celtic",
          logo: "https://media-4.api-sports.io/football/teams/247.png",
        },
        points: 1,
        goalsDiff: -9,
        group: "Group E",
        form: "LDLL",
        status: "same",
        description: null,
        all: {
          played: 4,
          win: 0,
          draw: 1,
          lose: 3,
          goals: {
            for: 3,
            against: 12,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 3,
            against: 4,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 0,
            against: 8,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
    ],
    [
      {
        rank: 1,
        team: {
          id: 165,
          name: "Borussia Dortmund",
          logo: "https://media-4.api-sports.io/football/teams/165.png",
        },
        points: 7,
        goalsDiff: 1,
        group: "Group F",
        form: "WWDL",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 2,
          draw: 1,
          lose: 1,
          goals: {
            for: 3,
            against: 2,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 1,
          lose: 0,
          goals: {
            for: 2,
            against: 0,
          },
        },
        away: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 1,
            against: 2,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 2,
        team: {
          id: 85,
          name: "Paris Saint Germain",
          logo: "https://media-4.api-sports.io/football/teams/85.png",
        },
        points: 6,
        goalsDiff: 1,
        group: "Group F",
        form: "LWLW",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 2,
          draw: 0,
          lose: 2,
          goals: {
            for: 7,
            against: 6,
          },
        },
        home: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 5,
            against: 0,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 2,
            against: 6,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 3,
        team: {
          id: 489,
          name: "AC Milan",
          logo: "https://media-4.api-sports.io/football/teams/489.png",
        },
        points: 5,
        goalsDiff: -2,
        group: "Group F",
        form: "WLDD",
        status: "same",
        description: "Promotion - Europa League (Play Offs: 1/16-finals)",
        all: {
          played: 4,
          win: 1,
          draw: 2,
          lose: 1,
          goals: {
            for: 2,
            against: 4,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 1,
          lose: 0,
          goals: {
            for: 2,
            against: 1,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 0,
            against: 3,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 4,
        team: {
          id: 34,
          name: "Newcastle",
          logo: "https://media-4.api-sports.io/football/teams/34.png",
        },
        points: 4,
        goalsDiff: 0,
        group: "Group F",
        form: "LLWD",
        status: "same",
        description: null,
        all: {
          played: 4,
          win: 1,
          draw: 1,
          lose: 2,
          goals: {
            for: 4,
            against: 4,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 4,
            against: 2,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 0,
            against: 2,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
    ],
    [
      {
        rank: 1,
        team: {
          id: 50,
          name: "Manchester City",
          logo: "https://media-4.api-sports.io/football/teams/50.png",
        },
        points: 12,
        goalsDiff: 9,
        group: "Group G",
        form: "WWWW",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 4,
          draw: 0,
          lose: 0,
          goals: {
            for: 12,
            against: 3,
          },
        },
        home: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 6,
            against: 1,
          },
        },
        away: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 6,
            against: 2,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 2,
        team: {
          id: 173,
          name: "RB Leipzig",
          logo: "https://media-4.api-sports.io/football/teams/173.png",
        },
        points: 9,
        goalsDiff: 3,
        group: "Group G",
        form: "WWLW",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 3,
          draw: 0,
          lose: 1,
          goals: {
            for: 9,
            against: 6,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 4,
            against: 4,
          },
        },
        away: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 5,
            against: 2,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 3,
        team: {
          id: 598,
          name: "FK Crvena Zvezda",
          logo: "https://media-4.api-sports.io/football/teams/598.png",
        },
        points: 1,
        goalsDiff: -5,
        group: "Group G",
        form: "LLDL",
        status: "same",
        description: "Promotion - Europa League (Play Offs: 1/16-finals)",
        all: {
          played: 4,
          win: 0,
          draw: 1,
          lose: 3,
          goals: {
            for: 5,
            against: 10,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 3,
            against: 4,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 2,
            against: 6,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 4,
        team: {
          id: 565,
          name: "BSC Young Boys",
          logo: "https://media-4.api-sports.io/football/teams/565.png",
        },
        points: 1,
        goalsDiff: -7,
        group: "Group G",
        form: "LLDL",
        status: "same",
        description: null,
        all: {
          played: 4,
          win: 0,
          draw: 1,
          lose: 3,
          goals: {
            for: 4,
            against: 11,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 2,
            against: 6,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 1,
          lose: 1,
          goals: {
            for: 2,
            against: 5,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
    ],
    [
      {
        rank: 1,
        team: {
          id: 529,
          name: "Barcelona",
          logo: "https://media-4.api-sports.io/football/teams/529.png",
        },
        points: 9,
        goalsDiff: 6,
        group: "Group H",
        form: "LWWW",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 3,
          draw: 0,
          lose: 1,
          goals: {
            for: 8,
            against: 2,
          },
        },
        home: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 7,
            against: 1,
          },
        },
        away: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 1,
            against: 1,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 2,
        team: {
          id: 212,
          name: "FC Porto",
          logo: "https://media-4.api-sports.io/football/teams/212.png",
        },
        points: 9,
        goalsDiff: 6,
        group: "Group H",
        form: "WWLW",
        status: "same",
        description: "Promotion - Champions League (Play Offs: 1/8-finals)",
        all: {
          played: 4,
          win: 3,
          draw: 0,
          lose: 1,
          goals: {
            for: 9,
            against: 3,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 2,
            against: 1,
          },
        },
        away: {
          played: 2,
          win: 2,
          draw: 0,
          lose: 0,
          goals: {
            for: 7,
            against: 2,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 3,
        team: {
          id: 550,
          name: "Shakhtar Donetsk",
          logo: "https://media-4.api-sports.io/football/teams/550.png",
        },
        points: 6,
        goalsDiff: -1,
        group: "Group H",
        form: "WLWL",
        status: "same",
        description: "Promotion - Europa League (Play Offs: 1/16-finals)",
        all: {
          played: 4,
          win: 2,
          draw: 0,
          lose: 2,
          goals: {
            for: 6,
            against: 7,
          },
        },
        home: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 2,
            against: 3,
          },
        },
        away: {
          played: 2,
          win: 1,
          draw: 0,
          lose: 1,
          goals: {
            for: 4,
            against: 4,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
      {
        rank: 4,
        team: {
          id: 740,
          name: "Antwerp",
          logo: "https://media-4.api-sports.io/football/teams/740.png",
        },
        points: 0,
        goalsDiff: -11,
        group: "Group H",
        form: "LLLL",
        status: "same",
        description: null,
        all: {
          played: 4,
          win: 0,
          draw: 0,
          lose: 4,
          goals: {
            for: 3,
            against: 14,
          },
        },
        home: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 3,
            against: 7,
          },
        },
        away: {
          played: 2,
          win: 0,
          draw: 0,
          lose: 2,
          goals: {
            for: 0,
            against: 7,
          },
        },
        update: "2023-11-11T00:00:00+00:00",
      },
    ],
  ];
  return (
    <>
      <h2 className="cl-h2">Champions League Group Stage</h2>
      <div className="cl-groups">
        {groups.map((group, index) => (
          <div key={index} className="cl-group-container">
            <h3 className="cl-group-text">{group[0].group}</h3>
            <div className="cl-header">
              <span>#</span>
              <span className="cl-team-text">Team</span>
              <span>MP</span>
              <span>W</span>
              <span>D</span>
              <span>L</span>
              <span>G</span>
              <span>GD</span>
              <span>Form</span>
              <span>PTS</span>
            </div>
            <div className="cl-team-rows">
              {group.map((team) => (
                <CLItem teamData={team} key={`cl-table-${team.team.id}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChampionsLeague;