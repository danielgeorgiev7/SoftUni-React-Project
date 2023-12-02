function CLItem({ teamData }) {
  // console.log(teamData);
  return (
    <div
      key={teamData.team.id}
      className={`cl-team-card ${teamData.team.id === 541 ? "cl-real" : ""}`}
    >
      <span>{teamData.rank}.</span>
      <div className="cl-team-info">
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
      <div className="cl-form">
        {teamData.form.split("").map((current, index) => (
          <span
            key={`${teamData.team.name}-form-cl-${index + 1}`}
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

export default CLItem;
