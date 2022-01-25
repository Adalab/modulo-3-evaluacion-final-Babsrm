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
      <h4 className="card__title">{props.char.name}</h4>
      <p className="card__description">{props.char.house} </p>
      <p className="card__description">Edad {props.char.age}</p>
      {/* <p className="card__description">Email {props.char.email}</p> */}
    </section>
  );
}
export default CharDetail;
