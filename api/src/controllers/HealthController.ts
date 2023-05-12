import { NextFunction, Request, Response } from "express";
import { BaseController } from "../interfaces/controllerInterface";
import httpStatus from "http-status";
import { HttpError } from "../helpers";

class HealthController extends BaseController {
    constructor(path: string, service: string) {
        super(path, service);
    }

    initRoutes() {
        this.router.get(`${this.path}`, this.healthCheck);
    }

    async healthCheck(_req: Request, res: Response, next: NextFunction) {
        try {
            res.status(httpStatus.OK).send(httpStatus[httpStatus.OK]);
        } catch (err) {
            next(HttpError.createError(err));
        }
    }
}

export default HealthController;
