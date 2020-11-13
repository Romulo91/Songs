import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Juicy", ducation: "3:05" },
    { title: "Sock It 2 Me", ducation: "2:30" },
    { title: "It Was A Good Day", ducation: "4:30" },
    { title: "Alright", ducation: "4:05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
