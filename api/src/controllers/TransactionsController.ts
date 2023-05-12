import { NextFunction, Request, Response } from "express";
import { BaseController } from "../interfaces/controllerInterface";
import { HttpError } from "../helpers";
import transactionService from "../services/transactionService";

class TransactionController extends BaseController {
    constructor(path: string, service: string) {
        super(path, service);
    }

    initRoutes() {
        this.router.get(`${this.path}`, this.getTransactions);
    }

    async getTransactions(_req: Request, res: Response, next: NextFunction) {
        try {
            const products = await transactionService.getAll();
            res.status(200).json(products);
        } catch (err) {
            next(HttpError.createError(err));
        }
    }
}

export default TransactionController;
