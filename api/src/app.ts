import express, {
    Application,
    ErrorRequestHandler,
    RequestHandler,
} from "express";
import { Server, createServer } from "http";
import Configuration from "./common/Configuration";
import { BaseController } from "./interfaces/controllerInterface";

class App {
    private readonly _app: Application;
    private readonly _server: Server;
    private readonly _port: number;
    private readonly errorHandler: ErrorRequestHandler;

    constructor(appInit: {
        controllers: BaseController[];
        middlewares: RequestHandler[];
        errorHandler: ErrorRequestHandler;
    }) {
        this._app = express();
        this._server = createServer(this._app);
        this._port = Configuration.globals.port;
        this.errorHandler = appInit.errorHandler;

        this.middlewares(appInit.middlewares);
        this.routes(appInit.controllers);
        this.setErrorHandler();
    }

    get app(): Application {
        return this._app;
    }

    get server(): Server {
        return this._server;
    }

    get port(): number | string {
        return this._port;
    }

    public listen() {
        this.server.listen(this._port, () => {
            console.log(Configuration.api.gretting());
        });
    }

    private routes(controllers: BaseController[]) {
        controllers.forEach((controller) => {
            this._app.use(Configuration.api.apiVersion, controller.router);
        });
    }

    private middlewares(middlewares: RequestHandler[]) {
        middlewares.forEach((middleware) => {
            this._app.use(middleware);
        });
    }

    private setErrorHandler() {
        this._app.use(this.errorHandler);
    }
}

export default App;
