import { Link } from 'react-router-dom';
import imageNotFound from '../images/image-not-found.png';
function CharDetail(props) {
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
					className="card__img"
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
	const charAlive = () => {
		return props.char.alive ? 'Vive' : 'Muerto';
	};
	const charGender = () => {
		return props.char.gender === 'female' ? 'Femenino' : 'Masculino';
	};
	const charAltName = () => {
		if (props.char.altName.length >  0) {
			return <p className="card__description">Nombre alternativo: {props.char.altName}</p>
		} else return ''
	}
	return (
		<section>
			<Link to="/"> Volver al inicio</Link>
			<h2>DETALLE DEL PERSONAJE</h2>
			{getImage()}
			<h4 className="card__title">Nombre: {props.char.name}</h4>
			<p className="card__description">Casa: {props.char.house} </p>
			<p className="card__description">Especie: {charSpecies()}</p>
			<p className="card__description">Estado: {charAlive()}</p>
			<p className="card__description">Género: {charGender()}</p>
			{charAltName()}
		</section>
	);
}
export default CharDetail;
