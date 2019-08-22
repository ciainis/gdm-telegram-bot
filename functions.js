const axios = require('axios');
const { SEARCH_API_KEY, SEARCH_ID } = process.env;

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const getRandomPhrase = () => {
  return axios
    .get('http://facciamocome.org/generate')
    .then(({ data }) => (phrase = data.phrase))
    .catch(err => console.log(err));
};

const getRandomPhoto = searchText => {
  return axios
    .get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: SEARCH_API_KEY,
        cx: SEARCH_ID,
        q: `${searchText}`,
        searchType: 'image'
      }
    })
    .then(({ data }) => data.items[getRandomInt(10)].link)
    .catch(err => console.log(err));
};

module.exports = { getRandomInt, getRandomPhoto, getRandomPhrase };
