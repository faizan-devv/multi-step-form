const Areas = ({ settrue }) => {
  return (
    <div>
      <label for="states" style={{ marginRight: "20px" }}>
        Choose an Area:
      </label>
      <select
        name="areas"
        id="areas"
        onChange={(e) => {
          settrue("area", e.target.value);
        }}
      >
        <option value="F/11">F/11</option>
        <option value="St Hilary">St Hilary</option>
        <option value="Times Square">Times Square</option>
        <option value="Nazimabad">Nazimabad</option>
        <option value="Pepla">Pepla</option>
        <option value="Sloan">Sloan</option>
        <option value="Hayatabad">Hayatabad</option>
        <option value="Aubing">Aubing</option>
        <option value="ibis Chambery">ibis Chambery</option>
        <option value="Lanakan">Lanakan</option>
      </select>
    </div>
  );
};

export default Areas;
