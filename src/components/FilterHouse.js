const FilterHouse = (props) => {
    const handleChange = (ev) => {
      props.handleFilter({
        key: 'house',
        value: ev.target.value,
      });
    };
    return (
      <>
        <label className="form__label display-block" htmlFor="house">
          Casas:
        </label>
        <select
          className="form__input-text"
          name="house"
          id="house"
          onChange={handleChange}
          value={props.filterHouse}
        >
          <option value="">Todas</option>
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
        </select>
      </>
    );
  };
  export default FilterHouse;