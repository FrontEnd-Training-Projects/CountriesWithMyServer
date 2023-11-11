import { putAllCountries } from "../Reducers/allCountriesReducer";
import { CountryData } from "../Types/CountryTypes";
import { FetchEnums } from "../Utils/fetchEnums";
import { AppDispatch } from "../app/store";

export const fetchAllCountries = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(FetchEnums.BASE_URL.concat(FetchEnums.ALL_COUNTRIES));
            if (response.ok) {
                const data: CountryData[] = await response.json();
                dispatch(putAllCountries(data));
            }
        } catch (error) {

        }
    }
};