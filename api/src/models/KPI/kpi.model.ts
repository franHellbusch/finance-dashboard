import { Schema, model } from "mongoose";
import { monthSchema } from "./month.schema";
import { daySchema } from "./day.schema";
import { KPI } from "../../interfaces/KPI.interface";
import { currencyToNumber, currencyToString } from "../../helpers";

const KPISchema = new Schema(
    {
        totalProfit: {
            type: String,
            set: currencyToString,
            get: currencyToNumber,
        },
        totalRevenue: {
            type: String,
            set: currencyToString,
            get: currencyToNumber,
        },
        totalExpenses: {
            type: String,
            set: currencyToString,
            get: currencyToNumber,
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: String,
                set: currencyToString,
                get: currencyToNumber,
            },
        },
        monthlyData: [monthSchema],
        daylyData: [daySchema],
    },
    {
        toJSON: { getters: true },
        timestamps: true,
    }
);

const KPIModel = model<KPI>("KPI", KPISchema);

export default KPIModel;
