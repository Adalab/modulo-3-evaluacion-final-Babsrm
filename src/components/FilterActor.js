const FilterActor = (props) => {
	const handleChange = (ev) => {
		ev.preventDefault();
		props.handleFilter({
			key: 'actor',
			value: ev.target.value,
		});
	};
	return (
		<>
			<label className="" htmlFor="actor">
				Actor:
			</label>
			<input
				className=""
				name="actor"
                type="text"
				id="actor"
				onChange={handleChange}
				value={props.filterActor}
			>
			</input>
		</>
	);
};
export default FilterActor;
