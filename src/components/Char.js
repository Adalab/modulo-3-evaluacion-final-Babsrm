import { Link } from 'react-router-dom';
import imageNotFound from '../images/image-not-found.png';
const Char = (props) => {
	const getHouse = () => {
		if (props.char.house === 'Gryffindor') return 'Gryffindor';
		else if (props.char.house === 'Slytherin') return 'Slytherin';
		else if (props.char.house === 'Ravenclaw') return 'Ravenclaw';
		else if (props.char.house === 'Hufflepuff') return 'Hufflepuff';
	};
	const getImage = () => {
		if (props.char.image === '') {
			return (
				<img
					alt="Imagen no encontrada"
					title="Imagen no encontrada"
					src={imageNotFound}
				/>
			);
		} else
			return (
				<img
					className="card-picture"
					src={props.char.image}
					alt={`Foto de ${props.char.name}`}
					title={`Foto de ${props.char.name}`}
				/>
			);
	};
	const charSpecies = () => {
		if (props.char.species === 'human') {
			if (props.char.gender === 'male') {
				return 'Humano';
			} else {
				return 'Humana';
			}
		} else if (props.char.species === 'half-giant') {
			return 'Medio-gigante';
		} else if (props.char.species === 'ghost') {
			return 'Fantasma';
		} else if (props.char.species === 'werewolf') {
			return 'Hombre-lobo';
		}
	};

	return (
		<Link to={`/char/${props.char.id}`}>
			<div className="cards">
				{getImage()}
				<h4 className="">{props.char.name}</h4>
				<p className="">{getHouse()}</p>
				<p>{charSpecies()}</p>
			</div>
		</Link>
	);
};
export default Char;
