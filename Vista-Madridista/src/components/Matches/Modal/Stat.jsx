import "./Statistics.css";
function Stat({ typeStat, stat, backgroundClass, statClass, style }) {
  return (
    <>
      {stat.type !== "expected_goals" && (
        <>
          <span className={backgroundClass}></span>
          <span className={statClass} style={style}>
            {stat.type === typeStat.type
              ? typeStat.value === null
                ? "0"
                : typeStat.value
              : null}
          </span>
        </>
      )}
    </>
  );
}

export default Stat;
