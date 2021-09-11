import { createSlice } from "@reduxjs/toolkit";
import ForeignMovie1 from "../assets/images/chetel/karasevda.jfif";
import ForeignMovie2 from "../assets/images/chetel/truedetective.jpg";
import ForeignMovie3 from "../assets/images/chetel/usmon.jpg";
import ForeignMovie4 from "../assets/images/chetel/breakingbad.jfif";

const initialState = {
  foreignMovies: [
    { type:"chetel",foto: ForeignMovie1, title: "Kara Sevda" },
    { type:"chetel",foto: ForeignMovie2, title: "Haqiqiy detektiv" },
    { type:"chetel",foto: ForeignMovie3, title: "Usmon" },
    { type:"chetel",foto: ForeignMovie4, title: "Breaking Bad" },
  ],
};
const foreignMoviesSlice = createSlice({
  name: "foreignMovies",
  initialState,
  reducers: {
    addForeignMovie: (state, action) => {
      state.foreignMovies = state.movies.push("ojiza");
    },
    deleteForeignMovie: (state, action) => {
      state.foreignMovies = [];
    },
  },
});

export const { addForeignMovie, deleteForeignMovie } =
  foreignMoviesSlice.actions;
export default foreignMoviesSlice.reducer;
