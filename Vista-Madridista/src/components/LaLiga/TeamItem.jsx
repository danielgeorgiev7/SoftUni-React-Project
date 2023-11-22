function TeamItem({ teamData }) {
  return (
    <div
      className={`standings-row ${
        teamData.team.id === 541 ? "standings-real" : ""
      }`}
    >
      <span>{teamData.rank}</span>
      <div className="standings-team-info">
        <img src={teamData.team.logo} alt={teamData.team.name} />
        <span>{teamData.team.name}</span>
      </div>
      <span>{teamData.all.played}</span>
      <span>{teamData.all.win}</span>
      <span>{teamData.all.draw}</span>
      <span>{teamData.all.lose}</span>
      <span>
        {teamData.all.goals.for}:{teamData.all.goals.against}
      </span>
      <span>{teamData.goalsDiff}</span>
      <div className="form">
        {teamData.form.split("").map((current, index) => (
          <span
            key={`${teamData.team.name}-form-${index + 1}`}
            className={current.toLowerCase()}
          >
            {current}
          </span>
        ))}
      </div>
      <span>{teamData.points}</span>
    </div>
  );
}

export default TeamItem;
