import CharDetail from "../components/CharDetail";

const callToApi = (filterHouse) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
    .then((response) => response.json())
    .then((response) => {
      const cleanData = response.map( (char,index) => {
      return {
        name: char.name,
        house: char.house,
        id: index,
        species: char.species,
        alive: char.alive,
        image: char.image,
        gender: char.gender,
        altName: char.alternate_names,
        actor: char.actor,
      }}
    );
    return cleanData;})
};

export default callToApi;
