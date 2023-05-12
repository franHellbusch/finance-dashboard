import App from "./app";
import HealthController from "./controllers/HealthController";
import cors from "cors";
import express from "express";
import errorHandler from "./middlewares/ErrorHandler";
import KpisController from "./controllers/KpisController";
import ProductsController from "./controllers/ProductsController";
import TransactionController from "./controllers/TransactionsController";

const createNewApp = () => {
    return new App({
        controllers: [
            new HealthController("/health", "api-health"),
            new KpisController("/kpis", "api-kpis"),
            new ProductsController("/products", "api-products"),
            new TransactionController("/transactions", "api-transactions"),
        ],
        middlewares: [cors(), express.json()],
        errorHandler,
    });
};

export default createNewApp();
