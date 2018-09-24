const axios = require('axios');

module.exports = {
  homeworld: async parent => await axios
    .get(parent.homeworld)
    .then(response => response.data),
  films: async parent => {
    const filmRequests = parent.films.map(film => axios.get(film))
    return await Promise.all(filmRequests)
      .then(responses => responses.map(response => {
        return {
          title: response.data.title,
          episode: response.data.episode_id,
          opening: response.data.opening_crawl,
          release: response.data.release_date
        }
      })
        .sort((a, b) => a.episode > b.episode))
  }
}