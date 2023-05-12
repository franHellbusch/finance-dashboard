import httpStatus from "http-status";
import { HttpError } from "./httpError";

export const handleMongoError = (err: any): HttpError => {
    if (err.name == "CastError") {
        return HttpError.createError(err, 400);
    }
    if (err.name == "ValidationError") {
        return HttpError.createError(err, httpStatus.BAD_REQUEST);
    }
    if (err.code == 11000) {
        return HttpError.createError(err, httpStatus.CONFLICT);
    }
    if (err.message == "Not Found") {
        return HttpError.createError(err, httpStatus.NOT_FOUND);
    }

    return HttpError.createError(err, err.status || 500);
};
