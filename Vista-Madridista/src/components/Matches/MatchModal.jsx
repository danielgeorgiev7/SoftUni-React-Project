import "./MatchModal.css";

export function MatchModal({ match }) {
  if (!match) return;
  console.log(match);
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <img
          src={
            "/" +
            match.teams.home.name.toLowerCase().split(" ").join("-") +
            ".jpg"
          }
          alt={`${match.teams.home.name} stadium`}
          className="stadium-img"
        />
        <div className="modal-venue">
          <p>
            <span>Venue: </span>
            {match.fixture.venue.name}, {match.fixture.venue.city}
          </p>
        </div>
        <div className="modal-teams">
          <div className="modal-home-team">
            <p className="modal-home-name">{match.teams.home.name}</p>
            <img src={match.teams.home.logo} alt="Home team logo" />
          </div>
          <span>
            {match.goals.home} — {match.goals.away}
          </span>
          <div className="modal-away-team">
            <img src={match.teams.away.logo} alt="Away team logo" />
            <p className="modal-away-name">{match.teams.away.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchModal;
