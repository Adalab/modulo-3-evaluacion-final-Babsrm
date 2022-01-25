import { Link } from 'react-router-dom';
const Char = (props) => {
  const getHouse = ('gryffindor'); 
        if (props.char.house === 'gryffindor'){console.log('Gryffindor');}
        else if (props.char.house === 'slytherin'){console.log('Slytherin');}
        else if (props.char.house === 'ravenclaw'){console.log('Ravenclaw');}
        else if(props.char.house === 'hufflepuff'){console.log('Hufflepuff');}
        
  return (
    <Link to={`/char/${props.char.id}`}>
      <img
        className="card__img"
        src={props.char.image}
        alt={`Foto de ${props.char.name}`}
        title={`Foto de ${props.char.name}`}
      />
      <h4 className="card__title">{props.char.name}</h4>
      <p className="card__description">
        {props.char.house} / {getHouse()}
      </p>
    </Link>
  );
};
export default Char;