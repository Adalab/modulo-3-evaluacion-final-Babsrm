//import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import callToApi from '../services/api';
import CharDetail from './CharDetail';
import CharList from './CharList';
import Filter from './Filter';
import HogwartsLogo from '../images/hogwartshouses_logo200.png';
import HPLogo from '../images/hp_logo500.png';

function App() {
	const [chars, setChars] = useState([]);
	const [filterName, setFilterName] = useState('');
	const [filterHouse, setFilterHouse] = useState('Gryffindor');
	const [filterGender, setFilterGender] = useState('');

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
		} else if (data.key === 'gender') {
			setFilterGender(data.value);
		}
	};

	const filteredChars = chars
		.filter((char) => {
			return char.name.toLowerCase().includes(filterName.toLowerCase());
		})
		.filter((char) => {
			return char.house === filterHouse;
		})
		.filter ((char) => {
			if (filterGender === '') {
				return char}
			else 
				return char.gender === filterGender;
		});

	const renderCharDetail = (props) => {
		const routeId = parseInt(props.match.params.charId);
		const foundChar = chars.find((char) => char.id === routeId);
		return <CharDetail char={foundChar} />;
	};

	return (
		<>
			<header>
				<img src={HogwartsLogo} alt="Hogwarts Logo" />
				<img src={HPLogo} alt="Harry Potter Logo" />
			</header>
			<Switch>
				<Route path="/" exact>
					<main>
						<div className="">
							<Filter
								handleFilter={handleFilter}
								filterName={filterName}
								filterHouse={filterHouse}
								filterGender={filterGender}
								setFilterName={setFilterName}
								setFilterHouse={setFilterHouse}
								setFilterGender={setFilterGender}
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
