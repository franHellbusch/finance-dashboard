import { Document } from "mongoose";

export interface Transaction extends Document {
    buyer: string;
    amount: number;
    productIds: string[];
}
