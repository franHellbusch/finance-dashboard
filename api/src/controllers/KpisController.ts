import { NextFunction, Request, Response } from "express";
import { BaseController } from "../interfaces/controllerInterface";
import { HttpError } from "../helpers";
import KPIService from "../services/KPIService";

class KpisController extends BaseController {
    constructor(path: string, service: string) {
        super(path, service);
    }

    initRoutes() {
        this.router.get(`${this.path}`, this.getKpis);
    }

    async getKpis(_req: Request, res: Response, next: NextFunction) {
        try {
            const kpis = await KPIService.getAll();
            res.status(200).json(kpis);
        } catch (err) {
            next(HttpError.createError(err));
        }
    }
}

export default KpisController;
