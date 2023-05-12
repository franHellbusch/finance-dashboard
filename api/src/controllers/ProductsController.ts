import { NextFunction, Request, Response } from "express";
import { BaseController } from "../interfaces/controllerInterface";
import { HttpError } from "../helpers";
import productService from "../services/productService";

class ProductsController extends BaseController {
    constructor(path: string, service: string) {
        super(path, service);
    }

    initRoutes() {
        this.router.get(`${this.path}`, this.getProducts);
    }

    async getProducts(_req: Request, res: Response, next: NextFunction) {
        try {
            const products = await productService.getAll();
            res.status(200).json(products);
        } catch (err) {
            next(HttpError.createError(err));
        }
    }
}

export default ProductsController;
