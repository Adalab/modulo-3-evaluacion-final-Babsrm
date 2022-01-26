import { Link } from 'react-router-dom';
const Char = (props) => {
  const getHouse = () =>{
        if (props.char.house === 'gryffindor')return 'Gryffindor';
        else if (props.char.house === 'slytherin') return 'Slytherin';
        else if (props.char.house === 'ravenclaw') return 'Ravenclaw';
        else if(props.char.house === 'hufflepuff') return 'Hufflepuff';} 
        
  return (
    <Link to={`/char/${props.char.uuid}`}>
      <img
        className="card__img"
        src={props.char.image}
        alt={`Foto de ${props.char.name}`}
        title={`Foto de ${props.char.name}`}
      />
      <h4 className="card__title">{props.char.name}</h4>
      <p className="card__description">
         {getHouse()}
      </p>
    </Link>
  );
};
export default Char;