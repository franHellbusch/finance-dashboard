import mongoose, { Schema, model } from "mongoose";
import { currencyToNumber, currencyToString } from "../../helpers";
import { Transaction } from "../../interfaces/transaction.interface";

const TransactionSchema = new Schema(
    {
        buyer: {
            type: String,
        },
        amount: {
            type: String,
            set: currencyToString,
            get: currencyToNumber,
        },
        productIds: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    {
        toJSON: { getters: true },
        timestamps: true,
    }
);

const TransactionModel = model<Transaction>("Transaction", TransactionSchema);

export default TransactionModel;
