const Genius = require("genius-lyrics");
const Client = new Genius.Client(process.env.GENIOUS_KEY); // Scrapes if no key is provided

const searchSongs = async (query) => {
  return await Client.songs.search(query);
};

const getSongLyrics = async (song) => {
  return await song.lyrics();
};

module.exports = {
  searchSongs,
  getSongLyrics
};