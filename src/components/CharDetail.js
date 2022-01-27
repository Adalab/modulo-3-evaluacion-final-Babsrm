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
	const isAlive = () => {
		return props.char.alive ? 'Vive' : 'Muerto';
	};
	return (
		<section>
			<Link to="/"> Volver al inicio</Link>
			<h2>DETALLE DEL PERSONAJE</h2>
			{getImage()}
			<h4 className="card__title">Nombre: {props.char.name}</h4>
			<p className="card__description">Casa: {props.char.house} </p>
			<p className="card__description">Especie: {props.char.species}</p>
			<p className="card__description">Estado: {isAlive()}</p>
		</section>
	);
}
export default CharDetail;
