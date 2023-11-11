import { ReactElement } from "react";
import { CountryFlags } from "./CountryTypes";

export interface CountryColumn {
    id: 'name' | 'official_name' | 'alpha3Code' | 'numericCode' | 'callingCode' | 'capital' | 'region' | 'subregion' | 'population' | 'timezones' | 'flag',
    label: string,
    minWidth?: number,
    align?: 'right' | 'left' | 'center',
    formatUtc?: (value: Array<string>) => ReactElement,
    formatFlag?: (value: CountryFlags) => ReactElement
}