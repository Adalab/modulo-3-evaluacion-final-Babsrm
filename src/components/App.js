//import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
//import ls from '../services/localstorage';
import { v4 as uuid } from 'uuid';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import CharDetail from './CharDetail';
import CharList from './CharList';
import Filter from './Filter';
//import PropTypes from 'prop-types';

console.log(uuid());

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
    if (data.name === 'name') {
      setFilterName(data.value);
    } else if (data.house === 'house') {
      setFilterHouse(data.value);
    // } else if (data.key === 'city') {
    //   if (filterCities.includes(data.value)) {
    //     const newCities = filterCities.filter((city) => city !== data.value);
    //     setFilterCities(newCities);
    //   } else {
    //     // filterCities.push(data.value);
    //     setFilterCities([...filterCities, data.value]);
    //   }
    }
  };

  const filteredChars = chars
    .filter((char) => {
      return char.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((char) => {
        return char.house === filterHouse;
      }
    )
    // .filter((char) => {
    //   if (filterCities.length === 0) {
    //     return true;
    //   } else {
    //     return filterCities.includes(char.city);
    //   }
   // });

  
  const renderCharDetail = (props) => {
    const routeId = props.match.params.char.uuid;
    const foundChar = chars.find((char) => char.uuid === routeId);
    //validar-- foundUser
    return <CharDetail char={foundChar} />;
  };

  // api

  //const [data, setData] = useState([]);

  /*
  useEffect(() => {
    callToApi().then((dataFromApi) => {
      setData(dataFromApi);
    });
  }, []);
  */

  // local storage

  //const [name, setName] = useState(ls.get('name', ''));
  //const [email, setEmail] = useState(ls.get('email', ''));

  //useState(ls.get('data', {}).name || '');
  //useState(ls.get('data', {}).email || '');

  /*
  useEffect(() => {
    ls.set('name', name);
    ls.set('email', email);
  }, [name, email]);
  */

  /*
  useEffect(() => {
    ls.set('data', {
      name: name,
      email: email,
    });
  }, [data]);
  */

  return (
    <>
    <div>{getTitle ('Harry Potter')}</div>
    <Switch>
        <Route path="/" exact>
          <div className="col2">
            <Filter
              handleFilter={handleFilter}
              filterName={filterName}
              filterHouse={filterHouse}
            />
            <CharList chars={filteredChars} />
          </div>
        </Route>
        <Route path="/char/:charId" render={renderCharDetail} />
      </Switch>
    </>
  );


// default props

/*
NombreDelComponente.defaultProps = {
  nombreDeLaProp1: 'valorPorDefectoDeLaProp1',
  nombreDeLaProp2: 'valorPorDefectoDeLaProp2',
};
*/

// prop types

/*
NombreDeMiComponente.propTypes = {
  nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
  nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired
}
*/
}
export default App;
