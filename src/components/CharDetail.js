import { Link } from 'react-router-dom';
import imageNotFound from '../images/image-not-found.png';
import GryffindorLogo from '../images/gryffindor_logo35px.png';
import HufflepuffLogo from '../images/hufflepuff_logo35px.png';
import RavenclawLogo from '../images/ravenclaw_logo35px.png';
import SlytherinLogo from '../images/slytherin_logo35px.png';

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
					className=""
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
		if (props.char.alive) {
			if (props.char.gender === 'male') {
				return 'Vivo';
			} else {
				return 'Viva';
			}}
		else {
			if (props.char.gender === 'male') {
				return 'Muerto';
			} else {
				return 'Muerta';
			}
		}
	};
	const charGender = () => {
		return props.char.gender === 'female' ? 'Femenino' : 'Masculino';
	};
	const charAltName = () => {
		if (props.char.altName.length > 0) {
			return (
				<p className="card__description">
					Nombre alternativo: {props.char.altName}
				</p>
			);
		} else return '';
	};
	const charHouseLogo = () => {
		if (props.char.house === 'Gryffindor') {
			return GryffindorLogo;
		} else if (props.char.house === 'Hufflepuff') {
			return HufflepuffLogo;
		} else if (props.char.house === 'Ravenclaw') {
			return RavenclawLogo;
		} else if (props.char.house === 'Slytherin') {
			return SlytherinLogo;
		}
	};
	return (
		<section>
			<Link to="/"> Volver al inicio</Link>
			<h2>DETALLE DEL PERSONAJE</h2>
			{getImage()}
			<h4 className="card__title">Nombre: {props.char.name}</h4>
			<p className="card__description">
				Casa: {props.char.house} {charHouseLogo()}{' '}
			</p>
			<p className="card__description">Especie: {charSpecies()}</p>
			<p className="card__description">Estado: {charAlive()}</p>
			<p className="card__description">Género: {charGender()}</p>
			{charAltName()}
		</section>
	);
}
export default CharDetail;
