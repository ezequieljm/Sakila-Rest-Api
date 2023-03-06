import { Request, Response, NextFunction } from "express";
import { pool } from "../../dbconnection";
import { getAllStaffQuery } from "./querys/staffQuerys";

// Read all customers
export function readAllStaff(req: Request, res: Response, next: NextFunction): void {
    pool.query(getAllStaffQuery)
        .then((rows) =>
            rows.length === 0
                ? res.status(200).json({ message: "There is not staff" })
                : res.status(200).send(rows)
        )
        .catch((err) => res.status(err.status || 500).json({ message: err.message }))
    ;
}

