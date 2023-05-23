import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  flights: [],
};

export const flightsSlice = createSlice({
  name: "flightAactions",
  initialState,
  reducers: {
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
  },
});

export const { setFlights } = flightsSlice.actions;

export default flightsSlice.reducer;
