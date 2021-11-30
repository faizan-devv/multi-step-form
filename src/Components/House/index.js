const Houses = ({ settrue }) => {
  return (
    <div>
      <label for="houses" style={{ marginRight: "20px" }}>
        Choose a House Number:
      </label>
      <select
        name="houses"
        id="houses"
        onChange={(e) => {
          settrue("house", e.target.value);
        }}
      >
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
        <option value="Four">Four</option>
        <option value="Five">Five</option>
        <option value="Six">Six</option>
        <option value="Seven">Seven</option>
        <option value="Eigth">Eigth</option>
        <option value="Nine">Nine</option>
        <option value="Ten">Ten</option>
      </select>
    </div>
  );
};

export default Houses;
