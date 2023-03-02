import { Request, Response, NextFunction } from "express";
import { pool } from "../dbconnection";

// Create a customer
export function createANewStaff(req: Request, res: Response, next: NextFunction): void {
    const {
        storeId,
        firstname,
        lastname,
        picture,
        email,
        addressId,
        active,
        username,
        password,
        lastUpdate,
    } = req.body;
    const insertCustomerQuery: string = `
        INSERT INTO customer(
            staff_id,
            store_id,
            first_name,
            last_name,
            picture,
            email,
            address_id,
            active,
            username,
            password,
            last_update
        )
        VALUES(DEFAULT,?,?,?,?,?,?,?,?)
    `;
    pool.query(insertCustomerQuery, [
        storeId,
        firstname,
        lastname,
        picture,
        email,
        addressId,
        active,
        username,
        password,
        lastUpdate,
    ])
        .then((result) =>
            res.status(200).json({ message: "Registered staff", insertedId: parseInt(result.insertId) })
        )
        .catch((error: Error) => res.status(500).json({ message: error.message }));
}

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

export function theNewTestFunction() {}
