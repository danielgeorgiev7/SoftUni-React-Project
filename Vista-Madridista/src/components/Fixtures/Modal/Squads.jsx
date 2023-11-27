import "./Squads.css";
import SquadsPlayer from "./SquadsPlayer";
function Squads({ fixture, homeLineups, awayLineups }) {
  const realMadridLineups =
    homeLineups.team.id === 541 ? homeLineups : awayLineups;
  const otherClubLineups =
    homeLineups.team.id !== 541 ? homeLineups : awayLineups;
  return (
    <div className="squads">
      <div className="real-madrid-squad">
        <h2>Real Madrid Squad</h2>

        <p className="squads-subheading">Coach</p>
        <div className="coach">
          <img
            src={realMadridLineups.coach.photo}
            alt={realMadridLineups.coach.name}
          />
          <div className="coach-textbox">
            <p>{realMadridLineups.coach.name}</p>
            <p>Current formation:</p>
            <p>{realMadridLineups.formation}</p>
          </div>
        </div>

        <p className="squads-subheading">Starting XI</p>
        <div className="squads-players">
          {realMadridLineups.startXI.map(({ player }) => (
            <SquadsPlayer
              key={player.id}
              playerInfo={player}
              fixture={fixture}
              teamId={541}
            />
          ))}
        </div>
        <p className="squads-subheading">Substitutes</p>
        <div className="squads-players">
          {realMadridLineups.substitutes.map(({ player }) => (
            <SquadsPlayer
              key={player.id}
              playerInfo={player}
              fixture={fixture}
              teamId={541}
            />
          ))}
        </div>
      </div>
      <div className="other-club-squad">
        <h2>{otherClubLineups.team.name} Squad</h2>
        <p className="squads-subheading">Coach</p>
        <div className="coach">
          <img
            src={otherClubLineups.coach.photo}
            alt={otherClubLineups.coach.name}
          />
          <div className="coach-textbox">
            <p>{otherClubLineups.coach.name}</p>
            <p>Current formation:</p>
            <p>{otherClubLineups.formation}</p>
          </div>
        </div>
        <p className="squads-subheading">Starting XI</p>
        <div className="squads-players">
          {otherClubLineups.startXI.map(({ player }) => (
            <SquadsPlayer
              key={player.id}
              playerInfo={player}
              fixture={fixture}
              teamId={otherClubLineups.team.id}
            />
          ))}
        </div>
        <p className="squads-subheading">Substitutes</p>
        <div className="squads-players">
          {otherClubLineups.substitutes.map(({ player }) => (
            <SquadsPlayer
              key={player.id}
              playerInfo={player}
              fixture={fixture}
              teamId={otherClubLineups.team.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Squads;
