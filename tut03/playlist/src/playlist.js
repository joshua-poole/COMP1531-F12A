import { getData } from "./dataStore.js";
import { getUserById } from "./helper.js";
import validator from 'validator'
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

// users is an array of User objects
// {
//     userId: String,
//     email: String,
//     password: String,
//     playlist: Song[],
//     dateCreated: String
// }

// songs is an array of Song objects
// {
//     songId: String,
//     name: String,
//     artist: String,
//     duration: Integer
// }

/**
 * Registers a user with an email and password 
 * @param {string} email 
 * @param {string} password 
 * @returns {{userId: number} | {error: string, message: string}} 
 */
export function addUser(email, password) {
  const data = getData();
  // check if password is empty
  if (password === '') {
    return { error: 'INVALID_PASSWORD', message: 'empty password' };
  }

  if (!validator.isEmail(email)) {
    return { error: 'INVALID_EMAIL', message: 'email is invalid' }
  }

  let userId = uuidv4();

  // 'WEEKDAY - hh:mm:ss [am/pm]". e.g. 'Saturday - 06:03:54 pm'
  let date = format(new Date(), "EEEE - hh:mm:ss a");
  console.log(date)
  const newUser = {
    userId: userId,
    email: email,
    password: password,
    playlist: [],
    dateCreated: date
  }

  data.users.push(newUser);

  return { userId };
}

/**
 * Adds a new song to the database
 * @param {string} name 
 * @param {string} artist 
 * @param {number} duration 
 * @returns {{userId: number} | {error: string, message: string}}
 */
export function addSong(name, artist, duration) {
  const data = getData();

  if (name === '') {
    return { error: 'INVALID_NAME', message: 'empty song name' };
  }
  if (artist === '') {
    return { error: 'INVALID_ARTIST', message: 'empty artist name' };
  }
  if (duration >= 10 || duration <= 0) {
    return { error: 'INVALID_DURATION', message: 'duration is less than 0 or greater than 10' };
  }

  const songId = uuidv4();

  data.songs.push({ name, artist, duration, songId });
  return { songId };
}

/**
 * Adds a song to a users playlist
 * @param {string} userId 
 * @param {string} songId 
 * @returns {{} | {error: string, message: string}}
 */
export function addToPlaylist(userId, songId) {
  const data = getData();

  const user = getUserById(userId);
  if (!user) {
    return { error: 'INVALID_USER_ID', message: 'user id is invalid' };
  }

  const song = data.songs.find(song => song.songId === songId);
  if (!song) {
    return { error: 'INVALID_SONG_ID', message: 'song id is invalid' };
  }

  if (user.playlist.includes(song)) {
    return { error: 'IN_PLAYLIST', message: 'song is already in users playlist' };
  }

  user.playlist.push(song);
  return {};
}

/**
 * Lists all of the songs in a users playlist
 * @param {string} userId 
 * @returns {songs[] | {error: string, message: string}} playlist
 */
export function listPlaylist(userId) {
  const user = getUserById(userId);

  if (!user) {
    return { error: 'INVALID_USER_ID', message: 'user id is invalid' };
  }
  return user.playlist;
}

/**
 * Returns the program to its original state
 * @returns {}
 */
export function clear() {
  const data = getData();
  data.songs = [];
  data.users = [];
  return {};
}

// Manually Testing that the code works!
// Add Users and Songs to the Database!
const userId = addUser('amber@gmail.com', 'secure!');
const songId = addSong('name', 'artist', 10);
console.log(userId);
console.log(songId);
