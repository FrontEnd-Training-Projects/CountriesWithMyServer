
export const tickFormatter = (value: number) => {
    const res = value.toLocaleString("en-US").split(",");
    if (res.length === 3) {
        return res[0].concat("M");
    }
    else if (res.length === 4) {
        return res[0].concat(",").concat(res[1]).concat("B");
    }
    return value.toLocaleString("en-US");
};