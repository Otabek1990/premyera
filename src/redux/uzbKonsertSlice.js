import { createSlice } from "@reduxjs/toolkit";
import Konsert1 from "../assets/images/konsertlar/million.jpeg";
import Konsert2 from "../assets/images/konsertlar/dizayn.jfif";
import Konsert3 from "../assets/images/konsertlar/ariktokratlar.jfif";
import Konsert4 from "../assets/images/konsertlar/yulduzusmonova.jfif";

const initialState = {
  uzbKonserts: [
    { type:"uzbKonsert",foto: Konsert1, title: "Million" },
    { type:"uzbKonsert",foto: Konsert2, title: "Dizayn" },
    { type:"uzbKonsert",foto: Konsert3, title: "Aristokratlar" },
    { type:"uzbKonsert",foto: Konsert4, title: "Yulduz Usmonova konserti" },
  ],
};
const uzbKonsertsSlice = createSlice({
  name: "uzbKonserts",
  initialState,
  reducers: {
    addUzbKonsert: (state, action) => {
      state.uzbKonserts = state.movies.push("ojiza");
    },
    deleteUzbKonsert: (state, action) => {
      state.uzbKonserts = [];
    },
  },
});

export const { addUzbKonsert, deleteUzbKonsert } = uzbKonsertsSlice.actions;
export default uzbKonsertsSlice.reducer;
