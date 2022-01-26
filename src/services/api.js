const callToApi = (filterHouse) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
    .then((response) => response.json())
    .then((response) => {
      const cleanData = response.map( (char,index) => {
      return {
        name: char.name,
        house: char.house,
        id: index,
        spieces: char.spieces,
        alive: char.alive,
      }}
    ); console.log(cleanData);
    return cleanData;})
};

export default callToApi;
