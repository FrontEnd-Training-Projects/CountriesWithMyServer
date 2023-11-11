interface Index {
    [key: string]: string | undefined
}

export interface CountryFlags {
    small: string,
    medium: string,
    large: string
}

export interface CountryData {
    name: string,
    official_name: string,
    alpha3Code: string,
    numericCode: string,
    callingCode: string,
    capital: string,
    region: string,
    subregion: string,
    population: number,
    timezones: Array<string>,
    flag: CountryFlags,
    index?: Index
}