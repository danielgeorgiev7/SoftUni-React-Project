function SummaryItem({ event, homeId, scoreForSummary }) {
  return (
    <div className={homeId === event.team.id ? "home" : "away"}>
      <p className="time-elapsed">
        {" "}
        {event.time.elapsed}
        {event.time.extra ? `+${event.time.extra}` : ""}&apos;{" "}
      </p>
      {event.type === "Goal" && (
        <>
          <div className="score">
            <img src="/ball.png" alt="Substitution" className="ball" />
            <p>
              {scoreForSummary.home} - {scoreForSummary.away}
            </p>
          </div>
          <p className="player">{event.player.name}</p>
          {event.assist.name && <p className="assist">({event.assist.name})</p>}
        </>
      )}
      {event.type === "Card" && (
        <>
          <img
            src={`/${event.detail.split(" ").join("-").toLowerCase()}.png`}
            alt={event.detail}
            className="card"
          />
          <p
            className={`player ${event.detail
              .split(" ")
              .join("-")
              .toLowerCase()}`}
          >
            {event.player.name}
          </p>
        </>
      )}
      {event.type === "subst" && (
        <>
          <img src="/substitution.png" alt="Substitution" className="subst" />
          <p className="joining-player">{event.assist.name}</p>
          <p className="leaving-player">{event.player.name}</p>
        </>
      )}
    </div>
  );
}

export default SummaryItem;
