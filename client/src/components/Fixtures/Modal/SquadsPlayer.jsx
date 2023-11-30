import "./SquadsPlayer.css";
function SquadsPlayer({ fixture, playerInfo, teamId }) {
  /* eslint-disable no-unexpected-multiline */
  const morePlayerInfo = fixture.players
    .filter((team) => team.team.id === teamId)
    ["0"].players.filter((player) => player.player.id === playerInfo.id)["0"];
  if (morePlayerInfo === undefined) return;
  const playerRating = Number(morePlayerInfo.statistics["0"].games.rating);
  let playerRatingStatus = "";
  if (playerRating === 0) {
    playerRatingStatus = "Hasn't played";
  } else {
    if (playerRating >= 9) playerRatingStatus = "excellent";
    if (playerRating >= 8 && playerRatingStatus < 9)
      playerRatingStatus = "very-good";
    if (playerRating >= 7 && playerRatingStatus < 8)
      playerRatingStatus = "good";
    if (playerRating >= 6.5 && playerRatingStatus < 7)
      playerRatingStatus = "average";
    if (playerRating >= 6 && playerRatingStatus < 6.5)
      playerRatingStatus = "bad";
    if (playerRatingStatus < 6) playerRatingStatus = "poor";
  }
  return (
    <div className="player">
      <img src={morePlayerInfo.player.photo} alt={playerInfo.name} />
      <div className="player-textbox">
        <p>
          {playerInfo.name}{" "}
          <span className="span-grey">({playerInfo.number})</span>
        </p>
        <p>
          {playerRatingStatus === "Hasn't played" ? (
            <span className="hasnt-played">Hasn&apos;t played</span>
          ) : (
            <>
              <span className="span-grey">Rating: </span>
              <span className={`span-rating ${playerRatingStatus}`}>
                {playerRating.toFixed(1)}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default SquadsPlayer;
