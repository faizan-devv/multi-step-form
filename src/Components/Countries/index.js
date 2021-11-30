const Country = ({ settrue }) => {
  return (
    <div>
      <label for="countries" style={{ marginRight: "20px" }}>
        Choose a Country:
      </label>
      <select
        name="Continents"
        id="countries"
        onChange={(e) => {
          console.log(e.target.value);
          settrue("country", e.target.value);
        }}
      >
        <option value="China">China</option>
        <option value="New Zealand">NewZealand</option>
        <option value="Congo">Congo</option>
        <option value="Venezuala">Venezuala</option>
        <option value="Canada">Canada</option>
        <option value="France">France</option>
        <option value="Russia">Russia</option>
        <option value="NetherLands">NetherLands</option>
        <option value="Honduras">Honduras</option>
        <option value="Vietnam">Vietnam</option>
      </select>
    </div>
  );
};

export default Country;
