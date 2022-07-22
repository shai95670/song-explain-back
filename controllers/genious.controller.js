const geniousService = require('../services/genious.service');

const searchSongs = async (query) => {
  const songs = await geniousService.searchSongs(query);
  return _getFormatedSongs(songs);
};

const _getFormatedSongs = async (songs) => {
  const formatedSong = [];
  for (let song of songs) {
    const lyrics = await geniousService.getSongLyrics(song);
    const { song_art_image_thumbnail_url, title, artist_names, primary_artist } = song.raw;
    formatedSong.push({
      song_art_image_thumbnail_url,
      artist_names,
      primary_artist,
      title,
      lyrics     
    });    
  };
  return formatedSong;
};

module.exports = {
  searchSongs,
};