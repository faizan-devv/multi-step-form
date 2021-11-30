const Cities = ({ settrue }) => {
  return (
    <div>
      <label for="states" style={{ marginRight: "20px" }}>
        Choose a City:
      </label>
      <select
        name="cities"
        id="cities"
        onChange={(e) => {
          settrue("city", e.target.value);
        }}
      >
        <option value="Islamabad">Islamabad</option>
        <option value="Cardif">Cardif</option>
        <option value="Manhattan">Manhattan</option>
        <option value="Karachi">Karachi</option>
        <option value="Merrut">Merrut</option>
        <option value="Las Vegas">Las Vegas</option>
        <option value="Peshawar">Peshawar</option>
        <option value="Munich">Munich</option>
        <option value="Nièvre">Nièvre</option>
        <option value="Mastritcht">Mastritcht</option>
      </select>
    </div>
  );
};

export default Cities;
