import { Document } from "mongoose";

export interface Product extends Document {
    price: number;
    expense: number;
    transactions: string[];
}
