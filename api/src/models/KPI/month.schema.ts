import { Schema } from "mongoose";
import { currencyToNumber, currencyToString } from "../../helpers";

export const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type: String,
            set: currencyToString,
            get: currencyToNumber,
        },
        expenses: {
            type: String,
            set: currencyToString,
            get: currencyToNumber,
        },
        operationalExpenses: {
            type: String,
            set: currencyToString,
            get: currencyToNumber,
        },
        nonOperationalExpenses: {
            type: String,
            set: currencyToString,
            get: currencyToNumber,
        },
    },
    {
        toJSON: { getters: true },
    }
);
