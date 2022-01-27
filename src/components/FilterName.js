function FilterName(props) {
	const handleInput = (ev) => {
		props.handleFilter({
			key: 'name',
			value: ev.currentTarget.value,
		});
	};

	return (
		<>
			<label className="" htmlFor="name">
				Filtrar por nombre:
			</label>
			<input
				className=""
				type="text"
				name="name"
				id={props.id}
				value={props.filterName}
				onChange={handleInput}
			/>
		</>
	);
}
export default FilterName;
