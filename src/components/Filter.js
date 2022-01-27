import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
const Filter = (props) => {
	const resetForm = (ev) => {
		ev.preventDefault();
	    props.setFilterName('');
	    props.setFilterHouse('Gryffindor');
	  }
	return (
		<section>
			<form>
				<FilterName
					handleFilter={props.handleFilter}
					filterName={props.filterName}
				/>
				<FilterHouse
					handleFilter={props.handleFilter}
					filterHouse={props.filterHouse}
				/>
				<button onClick={resetForm}>Reset</button>
			</form>
		</section>
	);
};
export default Filter;
