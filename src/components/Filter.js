import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
const Filter = (props) => {
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
			</form>
		</section>
	);
};
export default Filter;
