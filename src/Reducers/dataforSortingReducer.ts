import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataForSorting } from "../Types/GeneralTypes";

const initialDataForSorting: DataForSorting = {
    sortingData: "",
    labelData: ""
};

const dataforSortingSlice = createSlice({
    name: "dataForSorting",
    initialState: initialDataForSorting,
    reducers: {
        putDataForSorting(state, action: PayloadAction<string>) {
            state.sortingData = action.payload;
        },
        putDataForLabel(state, action: PayloadAction<string>) {
            state.labelData = action.payload;
        }
    }
});

export const {putDataForSorting, putDataForLabel} = dataforSortingSlice.actions;
export const dataforSortingReducer = dataforSortingSlice.reducer;