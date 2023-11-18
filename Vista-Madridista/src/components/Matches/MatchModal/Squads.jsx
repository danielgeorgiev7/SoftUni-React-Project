import "./Squads.css";
function Squads({ match }) {
  return (
    <div className="squads">
      <div className="real-madrid-squad">
        <p>Real Madrid Squad</p>
        <div className="starting-xi"></div>
        <div className="substitutes"></div>
      </div>
      <div className="other-club-squad"></div>
      <div className="starting-xi"></div>
      <div className="substitutes"></div>
    </div>
  );
}

export default Squads;
