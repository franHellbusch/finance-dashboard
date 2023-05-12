import mongoose, { Schema, model } from "mongoose";
import { currencyToNumber, currencyToString } from "../../helpers";
import { Product } from "../../interfaces/product.interface";

const ProductSchema = new Schema(
    {
        price: {
            type: String,
            set: currencyToString,
            get: currencyToNumber,
        },
        expense: {
            type: String,
            set: currencyToString,
            get: currencyToNumber,
        },
        transactions: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Transaction",
            },
        ],
    },
    {
        toJSON: { getters: true },
        timestamps: true,
    }
);

const ProductModel = model<Product>("Product", ProductSchema);

export default ProductModel;
