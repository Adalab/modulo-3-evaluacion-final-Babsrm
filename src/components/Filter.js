import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import FilterGender from './FilterGender';

const Filter = (props) => {
	const resetForm = (ev) => {
		ev.preventDefault();
		props.setFilterName('');
		props.setFilterHouse('Gryffindor')
		props.setFilterGender('');
	};
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
				<FilterGender
					handleFilter={props.handleFilter}
					filterGender={props.filterGender}
				/>
				<button onClick={resetForm}>Reset</button>
			</form>
		</section>
	);
};
export default Filter;
