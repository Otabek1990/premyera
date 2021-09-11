import { createSlice } from "@reduxjs/toolkit";
import Serial1 from "../assets/images/uzbekserial/qodirxon.jfif";
import Serial2 from "../assets/images/uzbekserial/shaytanat.jfif";
import Serial3 from "../assets/images/uzbekserial/qadam.jfif";
import Serial4 from "../assets/images/uzbekserial/ojiza.jfif";

const initialState = {
  uzbSerials: [
    { type: "uzbSerial", foto: Serial1, title: "Qodirxon" },
    { type: "uzbSerial", foto: Serial2, title: "Shaytanat" },
    { type: "uzbSerial", foto: Serial3, title: "Qadam" },
    { type: "uzbSerial", foto: Serial4, title: "Ojiza" },
  ],
};
const uzbekSerialSlice = createSlice({
  name: "uzbekSerials",
  initialState,
  reducers: {
    addSerial: (state, action) => {
      state.uzbSerials = state.movies.push("ojiza");
    },
    deleteSerial: (state, action) => {
      state.uzbSerials = [];
    },
  },
});

export const { addSerial, deleteSerial } = uzbekSerialSlice.actions;
export default uzbekSerialSlice.reducer;
