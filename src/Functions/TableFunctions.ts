export const checkLabelForRendering = (label: string): boolean => {
    return label === 'Country name' || label === 'Population' ? true : false;
};