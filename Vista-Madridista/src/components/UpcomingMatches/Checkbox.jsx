import "./Checkbox.css";
function Checkbox({ isChecked, setIsChecked }) {
  return (
    <div className="checkbox-wrapper-22">
      <label className="switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export default Checkbox;
