import {
    ErrorRequestHandler,
    NextFunction,
    Request,
    Response,
    Router,
} from "express";

export interface ControllerInterface {
    router: Router;
    path: string;
    initRoutes(): void;
    errorHandler: ErrorRequestHandler;
}

export abstract class BaseController implements ControllerInterface {
    router: Router;
    path: string;
    service: string;

    constructor(path: string, service: string) {
        this.path = path;
        this.service = service;
        this.router = Router();
        this.initRoutes();
        this.router.use(this.errorHandler);
    }

    abstract initRoutes(): void;

    errorHandler = (
        err: any,
        _req: Request,
        _res: Response,
        next: NextFunction
    ) => {
        err.service = this.service;
        next(err);
    };
}
