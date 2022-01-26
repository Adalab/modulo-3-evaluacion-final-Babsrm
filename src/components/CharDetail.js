import { Link } from 'react-router-dom';
function CharDetail(props) {
  return (
    <section>
      <Link to="/"> Volver al inicio</Link>
      <h2>DETALLE DEL PERSONAJE</h2>
      <img
        className="card__img"
        src={props.char.image}
        alt={`Foto de ${props.char.name}`}
        title={`Foto de ${props.char.name}`}
      />
      <h4 className="card__title">Nombre: {props.char.name}</h4>
      <p className="card__description">Casa: {props.char.house} </p>
      <p className="card__description">Especie: {props.char.species}</p>
    </section>
  );
}
export default CharDetail;
