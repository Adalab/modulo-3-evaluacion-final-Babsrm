const callToApi = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((response) => response);
};

export default callToApi;
