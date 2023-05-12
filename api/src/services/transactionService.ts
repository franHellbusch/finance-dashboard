import ServiceContainer from "../containers/service.container";
import { Transaction } from "../interfaces/transaction.interface";
import TransactionModel from "../models/Product/transaction.model";

class TransactionsService extends ServiceContainer<Transaction> {
    constructor() {
        super(TransactionModel);
    }
}

export default new TransactionsService();
