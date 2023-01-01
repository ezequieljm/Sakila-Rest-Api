import { Request, Response, NextFunction } from "express";
import { pool } from "../dbconnection";

// Read all customers
export function readAllStaff(req: Request, res: Response, next: NextFunction): void {
    pool.query("SELECT * FROM staff")
        .then((rows) =>
            rows.length === 0
                ? res.status(200).json({ message: "There is not staff" })
                : res.status(200).send(rows)
        )
        .catch((err) => res.status(err.status || 500).json({ message: err.message }));
}