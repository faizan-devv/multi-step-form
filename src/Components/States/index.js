const States = ({ settrue }) => {
  return (
    <div>
      <label for="states" style={{ marginRight: "20px" }}>
        Choose a State:
      </label>
      <select
        name="states"
        id="states"
        onChange={(e) => {
          settrue("state", e.target.value);
        }}
      >
        <option value="Punjab">Punjab</option>
        <option value="Wales">Wales</option>
        <option value="New York">New York</option>
        <option value="Sindh">Sindh</option>
        <option value="Utra Pradesh">Utra Pradesh</option>
        <option value="Navada">Navada</option>
        <option value="KPK">KPK</option>
        <option value="Bavaria">Bavaria</option>
        <option value="Bourgogne">Bourgogne</option>
        <option value="Limburg">Limburg</option>
      </select>
    </div>
  );
};

export default States;
