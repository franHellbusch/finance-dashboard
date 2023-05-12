import httpStatus from "http-status";

export class HttpError extends Error {
    status: number;
    statusCode: number;
    stack: string;

    constructor(error: { message: string; status: number; stack: string }) {
        super(error.message);

        this.status = error.status || 500;
        this.statusCode = this.status;
        this.stack = error.stack || "Unknown path error";

        if (this.status >= 500) {
            this.message = httpStatus[500];
        }
    }

    static createError(err: any, sts?: number) {
        const status = sts || err.status || 500;
        const message = err.message || httpStatus[status];
        const stack = err.stack
            ? err.stack.split("\n")[1].trim()
            : "unknown path error";

        if (err instanceof HttpError) return err;

        return new HttpError({
            message,
            status,
            stack,
        });
    }
}
