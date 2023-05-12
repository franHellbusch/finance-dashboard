import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { HttpError } from "../helpers";

const errorHandler: ErrorRequestHandler = (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.error(err);

    return res.status(err.status).json({
        success: false,
        ...err,
        message: err.message,
    });
};

export default errorHandler;
