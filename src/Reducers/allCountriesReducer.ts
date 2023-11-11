import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CountryData } from "../Types/CountryTypes";

const initialAllCountries: CountryData[] = [];

const allCountriesSlice = createSlice({
    name: 'allCountries',
    initialState: initialAllCountries,
    reducers: {
        putAllCountries(state, action: PayloadAction<CountryData[]>) {
            state = action.payload;
            return state;
        }
    }
});

export const { putAllCountries } = allCountriesSlice.actions;
export const allCountriesReducer = allCountriesSlice.reducer;