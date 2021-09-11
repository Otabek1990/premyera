import { createSlice } from "@reduxjs/toolkit";
import Kid1 from "../assets/images/bolalar/aralashquralash.jpg";
import Kid2 from "../assets/images/bolalar/sehrliqalpoqcha2.jfif";
import Kid3 from "../assets/images/bolalar/homealone.jpg";
import Kid4 from "../assets/images/bolalar/garrypoter.jfif";

const initialState = {
  kidsMovies: [
    { type:"bolalar",foto: Kid1, title: "Aralash quralash" },
    { type:"bolalar",foto: Kid2, title: "Sehrli qalpoqcha" },
    { type:"bolalar",foto: Kid3, title: "Uyda yolg'iz" },
    { type:"bolalar",foto: Kid4, title: "Garry Potter" },
  ],
};
const kidsMoviesSlice = createSlice({
  name: "kidsMovies",
  initialState,
  reducers: {
    addKidsMovie: (state, action) => {
      state.kidsMovies = state.movies.push("ojiza");
    },
    deleteKidsMovie: (state, action) => {
      state.kidsMovies = [];
    },
  },
});

export const { addKidsMovie, deleteKidsMovie } = kidsMoviesSlice.actions;
export default kidsMoviesSlice.reducer;
