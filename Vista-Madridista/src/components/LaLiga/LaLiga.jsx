import "./LaLiga.css";
import LaLigaItem from "./LaLigaItem";
function LaLiga() {
  const laLigaTable = [
    {
      league: {
        id: 140,
        name: "La Liga",
        country: "Spain",
        logo: "https://media-4.api-sports.io/football/leagues/140.png",
        flag: "https://media-4.api-sports.io/flags/es.svg",
        season: 2023,
        standings: [
          [
            {
              rank: 1,
              team: {
                id: 547,
                name: "Girona",
                logo: "https://media-4.api-sports.io/football/teams/547.png",
              },
              points: 34,
              goalsDiff: 15,
              group: "Primera División",
              form: "WWWWW",
              status: "same",
              description: "Promotion - Champions League (Group Stage: )",
              all: {
                played: 13,
                win: 11,
                draw: 1,
                lose: 1,
                goals: {
                  for: 31,
                  against: 16,
                },
              },
              home: {
                played: 6,
                win: 5,
                draw: 0,
                lose: 1,
                goals: {
                  for: 15,
                  against: 8,
                },
              },
              away: {
                played: 7,
                win: 6,
                draw: 1,
                lose: 0,
                goals: {
                  for: 16,
                  against: 8,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 541,
                name: "Real Madrid",
                logo: "https://media-4.api-sports.io/football/teams/541.png",
              },
              points: 32,
              goalsDiff: 19,
              group: "Primera División",
              form: "WDWDW",
              status: "same",
              description: "Promotion - Champions League (Group Stage: )",
              all: {
                played: 13,
                win: 10,
                draw: 2,
                lose: 1,
                goals: {
                  for: 28,
                  against: 9,
                },
              },
              home: {
                played: 6,
                win: 5,
                draw: 1,
                lose: 0,
                goals: {
                  for: 15,
                  against: 3,
                },
              },
              away: {
                played: 7,
                win: 5,
                draw: 1,
                lose: 1,
                goals: {
                  for: 13,
                  against: 6,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 529,
                name: "Barcelona",
                logo: "https://media-4.api-sports.io/football/teams/529.png",
              },
              points: 30,
              goalsDiff: 13,
              group: "Primera División",
              form: "WWLWD",
              status: "same",
              description: "Promotion - Champions League (Group Stage: )",
              all: {
                played: 13,
                win: 9,
                draw: 3,
                lose: 1,
                goals: {
                  for: 26,
                  against: 13,
                },
              },
              home: {
                played: 7,
                win: 6,
                draw: 0,
                lose: 1,
                goals: {
                  for: 15,
                  against: 5,
                },
              },
              away: {
                played: 6,
                win: 3,
                draw: 3,
                lose: 0,
                goals: {
                  for: 11,
                  against: 8,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 530,
                name: "Atletico Madrid",
                logo: "https://media-4.api-sports.io/football/teams/530.png",
              },
              points: 28,
              goalsDiff: 17,
              group: "Primera División",
              form: "WLWWW",
              status: "same",
              description: "Promotion - Champions League (Group Stage: )",
              all: {
                played: 12,
                win: 9,
                draw: 1,
                lose: 2,
                goals: {
                  for: 29,
                  against: 12,
                },
              },
              home: {
                played: 6,
                win: 6,
                draw: 0,
                lose: 0,
                goals: {
                  for: 16,
                  against: 7,
                },
              },
              away: {
                played: 6,
                win: 3,
                draw: 1,
                lose: 2,
                goals: {
                  for: 13,
                  against: 5,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 5,
              team: {
                id: 531,
                name: "Athletic Club",
                logo: "https://media-4.api-sports.io/football/teams/531.png",
              },
              points: 24,
              goalsDiff: 8,
              group: "Primera División",
              form: "WWDLW",
              status: "same",
              description: "Promotion - Europa League (Group Stage: )",
              all: {
                played: 13,
                win: 7,
                draw: 3,
                lose: 3,
                goals: {
                  for: 25,
                  against: 17,
                },
              },
              home: {
                played: 7,
                win: 4,
                draw: 2,
                lose: 1,
                goals: {
                  for: 18,
                  against: 11,
                },
              },
              away: {
                played: 6,
                win: 3,
                draw: 1,
                lose: 2,
                goals: {
                  for: 7,
                  against: 6,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 6,
              team: {
                id: 548,
                name: "Real Sociedad",
                logo: "https://media-4.api-sports.io/football/teams/548.png",
              },
              points: 22,
              goalsDiff: 7,
              group: "Primera División",
              form: "WLDWL",
              status: "same",
              description:
                "Promotion - Europa Conference League (Qualification: )",
              all: {
                played: 13,
                win: 6,
                draw: 4,
                lose: 3,
                goals: {
                  for: 23,
                  against: 16,
                },
              },
              home: {
                played: 7,
                win: 4,
                draw: 2,
                lose: 1,
                goals: {
                  for: 15,
                  against: 9,
                },
              },
              away: {
                played: 6,
                win: 2,
                draw: 2,
                lose: 2,
                goals: {
                  for: 8,
                  against: 7,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 7,
              team: {
                id: 543,
                name: "Real Betis",
                logo: "https://media-4.api-sports.io/football/teams/543.png",
              },
              points: 21,
              goalsDiff: 1,
              group: "Primera División",
              form: "DWWDD",
              status: "same",
              description: null,
              all: {
                played: 13,
                win: 5,
                draw: 6,
                lose: 2,
                goals: {
                  for: 17,
                  against: 16,
                },
              },
              home: {
                played: 6,
                win: 4,
                draw: 2,
                lose: 0,
                goals: {
                  for: 9,
                  against: 2,
                },
              },
              away: {
                played: 7,
                win: 1,
                draw: 4,
                lose: 2,
                goals: {
                  for: 8,
                  against: 14,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 8,
              team: {
                id: 534,
                name: "Las Palmas",
                logo: "https://media-4.api-sports.io/football/teams/534.png",
              },
              points: 18,
              goalsDiff: -1,
              group: "Primera División",
              form: "DWWLW",
              status: "same",
              description: null,
              all: {
                played: 13,
                win: 5,
                draw: 3,
                lose: 5,
                goals: {
                  for: 11,
                  against: 12,
                },
              },
              home: {
                played: 6,
                win: 3,
                draw: 2,
                lose: 1,
                goals: {
                  for: 6,
                  against: 4,
                },
              },
              away: {
                played: 7,
                win: 2,
                draw: 1,
                lose: 4,
                goals: {
                  for: 5,
                  against: 8,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 9,
              team: {
                id: 532,
                name: "Valencia",
                logo: "https://media-4.api-sports.io/football/teams/532.png",
              },
              points: 18,
              goalsDiff: -2,
              group: "Primera División",
              form: "LWDWD",
              status: "same",
              description: null,
              all: {
                played: 13,
                win: 5,
                draw: 3,
                lose: 5,
                goals: {
                  for: 16,
                  against: 18,
                },
              },
              home: {
                played: 6,
                win: 4,
                draw: 0,
                lose: 2,
                goals: {
                  for: 8,
                  against: 3,
                },
              },
              away: {
                played: 7,
                win: 1,
                draw: 3,
                lose: 3,
                goals: {
                  for: 8,
                  against: 15,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 10,
              team: {
                id: 728,
                name: "Rayo Vallecano",
                logo: "https://media-4.api-sports.io/football/teams/728.png",
              },
              points: 18,
              goalsDiff: -2,
              group: "Primera División",
              form: "LDDWD",
              status: "same",
              description: null,
              all: {
                played: 13,
                win: 4,
                draw: 6,
                lose: 3,
                goals: {
                  for: 15,
                  against: 17,
                },
              },
              home: {
                played: 6,
                win: 1,
                draw: 3,
                lose: 2,
                goals: {
                  for: 8,
                  against: 14,
                },
              },
              away: {
                played: 7,
                win: 3,
                draw: 3,
                lose: 1,
                goals: {
                  for: 7,
                  against: 3,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 11,
              team: {
                id: 546,
                name: "Getafe",
                logo: "https://media-4.api-sports.io/football/teams/546.png",
              },
              points: 16,
              goalsDiff: -2,
              group: "Primera División",
              form: "DWDDD",
              status: "same",
              description: null,
              all: {
                played: 13,
                win: 3,
                draw: 7,
                lose: 3,
                goals: {
                  for: 15,
                  against: 17,
                },
              },
              home: {
                played: 6,
                win: 3,
                draw: 3,
                lose: 0,
                goals: {
                  for: 6,
                  against: 3,
                },
              },
              away: {
                played: 7,
                win: 0,
                draw: 4,
                lose: 3,
                goals: {
                  for: 9,
                  against: 14,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 12,
              team: {
                id: 727,
                name: "Osasuna",
                logo: "https://media-4.api-sports.io/football/teams/727.png",
              },
              points: 14,
              goalsDiff: -6,
              group: "Primera División",
              form: "DLLWL",
              status: "same",
              description: null,
              all: {
                played: 13,
                win: 4,
                draw: 2,
                lose: 7,
                goals: {
                  for: 15,
                  against: 21,
                },
              },
              home: {
                played: 7,
                win: 1,
                draw: 2,
                lose: 4,
                goals: {
                  for: 6,
                  against: 11,
                },
              },
              away: {
                played: 6,
                win: 3,
                draw: 0,
                lose: 3,
                goals: {
                  for: 9,
                  against: 10,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 13,
              team: {
                id: 536,
                name: "Sevilla",
                logo: "https://media-4.api-sports.io/football/teams/536.png",
              },
              points: 12,
              goalsDiff: 1,
              group: "Primera División",
              form: "DDDDD",
              status: "same",
              description: null,
              all: {
                played: 12,
                win: 2,
                draw: 6,
                lose: 4,
                goals: {
                  for: 18,
                  against: 17,
                },
              },
              home: {
                played: 7,
                win: 2,
                draw: 3,
                lose: 2,
                goals: {
                  for: 12,
                  against: 9,
                },
              },
              away: {
                played: 5,
                win: 0,
                draw: 3,
                lose: 2,
                goals: {
                  for: 6,
                  against: 8,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 14,
              team: {
                id: 533,
                name: "Villarreal",
                logo: "https://media-4.api-sports.io/football/teams/533.png",
              },
              points: 12,
              goalsDiff: -6,
              group: "Primera División",
              form: "LLWDL",
              status: "same",
              description: null,
              all: {
                played: 13,
                win: 3,
                draw: 3,
                lose: 7,
                goals: {
                  for: 18,
                  against: 24,
                },
              },
              home: {
                played: 7,
                win: 1,
                draw: 1,
                lose: 5,
                goals: {
                  for: 11,
                  against: 15,
                },
              },
              away: {
                played: 6,
                win: 2,
                draw: 2,
                lose: 2,
                goals: {
                  for: 7,
                  against: 9,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 15,
              team: {
                id: 542,
                name: "Alaves",
                logo: "https://media-4.api-sports.io/football/teams/542.png",
              },
              points: 12,
              goalsDiff: -7,
              group: "Primera División",
              form: "LWLDD",
              status: "same",
              description: null,
              all: {
                played: 13,
                win: 3,
                draw: 3,
                lose: 7,
                goals: {
                  for: 11,
                  against: 18,
                },
              },
              home: {
                played: 6,
                win: 3,
                draw: 1,
                lose: 2,
                goals: {
                  for: 7,
                  against: 8,
                },
              },
              away: {
                played: 7,
                win: 0,
                draw: 2,
                lose: 5,
                goals: {
                  for: 4,
                  against: 10,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 16,
              team: {
                id: 724,
                name: "Cadiz",
                logo: "https://media-4.api-sports.io/football/teams/724.png",
              },
              points: 10,
              goalsDiff: -7,
              group: "Primera División",
              form: "LDLLL",
              status: "same",
              description: null,
              all: {
                played: 12,
                win: 2,
                draw: 4,
                lose: 6,
                goals: {
                  for: 10,
                  against: 17,
                },
              },
              home: {
                played: 6,
                win: 2,
                draw: 3,
                lose: 1,
                goals: {
                  for: 7,
                  against: 5,
                },
              },
              away: {
                played: 6,
                win: 0,
                draw: 1,
                lose: 5,
                goals: {
                  for: 3,
                  against: 12,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 17,
              team: {
                id: 798,
                name: "Mallorca",
                logo: "https://media-4.api-sports.io/football/teams/798.png",
              },
              points: 9,
              goalsDiff: -6,
              group: "Primera División",
              form: "LDLDD",
              status: "same",
              description: null,
              all: {
                played: 12,
                win: 1,
                draw: 6,
                lose: 5,
                goals: {
                  for: 12,
                  against: 18,
                },
              },
              home: {
                played: 5,
                win: 0,
                draw: 4,
                lose: 1,
                goals: {
                  for: 3,
                  against: 4,
                },
              },
              away: {
                played: 7,
                win: 1,
                draw: 2,
                lose: 4,
                goals: {
                  for: 9,
                  against: 14,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 18,
              team: {
                id: 538,
                name: "Celta Vigo",
                logo: "https://media-4.api-sports.io/football/teams/538.png",
              },
              points: 7,
              goalsDiff: -10,
              group: "Primera División",
              form: "LDLLD",
              status: "same",
              description: "Relegation - LaLiga2",
              all: {
                played: 13,
                win: 1,
                draw: 4,
                lose: 8,
                goals: {
                  for: 14,
                  against: 24,
                },
              },
              home: {
                played: 7,
                win: 0,
                draw: 3,
                lose: 4,
                goals: {
                  for: 4,
                  against: 11,
                },
              },
              away: {
                played: 6,
                win: 1,
                draw: 1,
                lose: 4,
                goals: {
                  for: 10,
                  against: 13,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 19,
              team: {
                id: 715,
                name: "Granada CF",
                logo: "https://media-4.api-sports.io/football/teams/715.png",
              },
              points: 7,
              goalsDiff: -12,
              group: "Primera División",
              form: "DLLLD",
              status: "same",
              description: "Relegation - LaLiga2",
              all: {
                played: 13,
                win: 1,
                draw: 4,
                lose: 8,
                goals: {
                  for: 18,
                  against: 30,
                },
              },
              home: {
                played: 7,
                win: 1,
                draw: 3,
                lose: 3,
                goals: {
                  for: 11,
                  against: 15,
                },
              },
              away: {
                played: 6,
                win: 0,
                draw: 1,
                lose: 5,
                goals: {
                  for: 7,
                  against: 15,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
            {
              rank: 20,
              team: {
                id: 723,
                name: "Almeria",
                logo: "https://media-4.api-sports.io/football/teams/723.png",
              },
              points: 3,
              goalsDiff: -20,
              group: "Primera División",
              form: "LLLLL",
              status: "same",
              description: "Relegation - LaLiga2",
              all: {
                played: 13,
                win: 0,
                draw: 3,
                lose: 10,
                goals: {
                  for: 15,
                  against: 35,
                },
              },
              home: {
                played: 7,
                win: 0,
                draw: 2,
                lose: 5,
                goals: {
                  for: 10,
                  against: 18,
                },
              },
              away: {
                played: 6,
                win: 0,
                draw: 1,
                lose: 5,
                goals: {
                  for: 5,
                  against: 17,
                },
              },
              update: "2023-11-15T00:00:00+00:00",
            },
          ],
        ],
      },
    },
  ];
  console.log(laLigaTable["0"].league.standings["0"]);
  return (
    <div className="standings-container">
      <div className="standings-header">
        <span>#</span>
        <span className="standings-team-text">Team</span>
        <span>MP</span>
        <span>Win</span>
        <span>Draw</span>
        <span>Lose</span>
        <span>Goals</span>
        <span>GD</span>
        <span>Form</span>
        <span>PTS</span>
      </div>
      <div className="standings-rows">
        {laLigaTable["0"].league.standings["0"].map((teamData) => (
          <LaLigaItem
            teamData={teamData}
            key={`la-liga-table-${teamData.team.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default LaLiga;
