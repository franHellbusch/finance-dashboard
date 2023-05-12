import { Schema } from "mongoose";
import { currencyToNumber, currencyToString } from "../../helpers";

export const daySchema = new Schema(
    {
        date: String,
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
    },
    {
        toJSON: { getters: true },
    }
);
