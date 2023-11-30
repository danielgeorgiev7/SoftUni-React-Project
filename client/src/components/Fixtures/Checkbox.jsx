import "./Checkbox.css";
function Checkbox({ checkboxChecked, setCheckboxChecked }) {
  return (
    <div className="checkbox-wrapper-22">
      <label className="switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value={checkboxChecked}
          onChange={(e) => setCheckboxChecked(e.target.checked)}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export default Checkbox;
