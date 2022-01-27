const FilterGender = (props) => {
	const handleChange = (ev) => {
		ev.preventDefault();
		props.handleFilter({
			key: 'gender',
			value: ev.target.value,
		});
	};
	return (
		<>
			<label className="" htmlFor="gender">
				Género:
			</label>
			<select
				className=""
				name="gender"
				id="gender"
				onChange={handleChange}
				value={props.filterGender}
			>
				<option value="">Ambos géneros</option>
				<option value="male">Masculino</option>
				<option value="female">Femenino</option>
			</select>
		</>
	);
};
export default FilterGender;
