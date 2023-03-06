import { Response, Request, NextFunction } from "express";

export function requireJsonContent(req: Request, res: Response, next: NextFunction): void {
    if (req.headers["content-type"] !== "application/json") {
        res.status(400).send("Server requires application/json");
    } else {
        next();
    }
}

