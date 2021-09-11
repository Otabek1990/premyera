import { createSlice } from "@reduxjs/toolkit";
import Kino1 from "../assets/images/uzbekkino/qoqon2.jfif";
import Kino2 from "../assets/images/uzbekkino/ibrat.jfif";
import Kino3 from "../assets/images/uzbekkino/farida.jfif";
import Kino4 from "../assets/images/uzbekkino/tutqunlik.jfif";

const initialState = {
  uzbMovies: [
    { type: "uzbKino", foto: Kino1, title: "Qo'qon shamoli" },
    { type: "uzbKino", foto: Kino2, title: "Ibrat" },
    { type: "uzbKino", foto: Kino3, title: "Faridaning ikki ming qo'shig'i" },
    { type: "uzbKino", foto: Kino4, title: "Tutqunlik" },
  ],
};
const uzbekMovieSlice = createSlice({
  name: "uzbekMovies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movie = state.movies.push("ojiza");
    },
    deleteMovie: (state, action) => {
      state.movies = [];
    },
  },
});

export const { addMovie, deleteMovie } = uzbekMovieSlice.actions;
export default uzbekMovieSlice.reducer;
