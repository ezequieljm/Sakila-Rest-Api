import express, { Request, Response } from "express";
import { pool } from "../dbconnection";

export function readAllCustomer(req: Request, res: Response): void {
    pool.query("SELECT * FROM customers")
        .then((rows) =>
            rows.length === 0
                ? res.status(200).json({ message: "There is not customers" })
                : res.status(200).send(rows)
        )
        .catch((err) => res.status(err.status || 500).json({ message: err.message }));
}