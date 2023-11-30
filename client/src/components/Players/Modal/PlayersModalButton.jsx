function PlayersModalButton({ option, buttonClicked, setButtonClicked }) {
  let leagueDisplay = "";
  leagueDisplay = option.league.name;
  if (option.league.name === "UEFA Champions League")
    leagueDisplay = "Champions League";
  if (option.league.name === "Friendlies Clubs")
    leagueDisplay = "Club Friendlies";

  return (
    <a
      className={`players-modal-button ${
        buttonClicked === leagueDisplay.split(" ").join("-").toLowerCase()
          ? "isActive"
          : ""
      }`}
      onClick={() =>
        setButtonClicked(leagueDisplay.split(" ").join("-").toLowerCase())
      }
    >
      {leagueDisplay}
    </a>
  );
}

export default PlayersModalButton;
