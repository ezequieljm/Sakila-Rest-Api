import { Response, Request, NextFunction } from "express";

export function errorLogger(error: any, req: Request, res: Response, next: NextFunction): void {
    console.log(`error ${error.message}`);
    next(error);
}

export function errorResponse(error: any, req: Request, res: Response, next: NextFunction): void {
    res.header("Conten-Type", "application/json");
    const status = error.status || 400;
    res.status(status).send(error.message);
}

export function invalidPathHandler(error: any, req: Request, res: Response, next: NextFunction) {
    res.status(400);
    res.send("invalid path");
}
