import "./Filter.css";

export function Filter({ value, onChange }) {
  return (
    <label className="filter">
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}