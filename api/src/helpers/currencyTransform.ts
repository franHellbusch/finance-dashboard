export const currencyToString = (val: number) => {
    const formattedPrice = `$${val.toFixed(2)}`;
    return formattedPrice;
};

export const currencyToNumber = (val: string) => {
    if (!val) {
        return 0;
    }

    const price = parseFloat(val.replace("$", ""));
    return price;
};
