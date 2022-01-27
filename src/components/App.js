//import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import callToApi from '../services/api';
import CharDetail from './CharDetail';
import CharList from './CharList';
import Filter from './Filter';

function App() {
	const getTitle = (text) => <h1>{text}</h1>;
	const [chars, setChars] = useState([]);
	const [filterName, setFilterName] = useState('');
	const [filterHouse, setFilterHouse] = useState('Gryffindor');

	useEffect(() => {
		callToApi(filterHouse).then((charsData) => {
			setChars(charsData);
		});
	}, [filterHouse]);

	//funcion manejadora de los filtros
	const handleFilter = (data) => {
		if (data.key === 'name') {
			setFilterName(data.value);
		} else if (data.key === 'house') {
			setFilterHouse(data.value);
		}
	};

	const filteredChars = chars
		.filter((char) => {
			return char.name.toLowerCase().includes(filterName.toLowerCase());
		})
		.filter((char) => {
			return char.house === filterHouse;
		});

	const renderCharDetail = (props) => {
		const routeId = parseInt(props.match.params.charId);
		const foundChar = chars.find((char) => char.id === routeId);
		return <CharDetail char={foundChar} />;
	};

	return (
		<>
			<header>
				<div>{getTitle('Harry Potter')}</div>
			</header>
			<Switch>
				<Route path="/" exact>
					<main>
						<div className="col2">
							<Filter
								handleFilter={handleFilter}
								filterName={filterName}
								filterHouse={filterHouse}
							/>
							<CharList chars={filteredChars} />
						</div>
					</main>
				</Route>
				<Route path="/char/:charId" render={renderCharDetail} />
			</Switch>
		</>
	);
}
export default App;
