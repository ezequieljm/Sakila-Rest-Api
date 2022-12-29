import express, { NextFunction, Request, Response } from "express";
import { pool } from "../dbconnection";

// Create a customer
export function createANewCustomer(req: Request, res: Response, next: NextFunction): void {
    const { storeId, firstname, lastname, email, addressId, active, createDate, lastUpdate } = req.body;
    const insertCustomerQuery: string = `
        INSERT INTO customer(customer_id,store_id,first_name,last_name,email,address_id,active,create_date,last_update)
        VALUES(DEFAULT,?,?,?,?,?,?,?,?)
    `;
    pool.query(insertCustomerQuery, [
        storeId,
        firstname,
        lastname,
        email,
        addressId,
        active,
        createDate,
        lastUpdate,
    ])
        // .then((result) => res.status(200).json({ message: "Registered customer", result }))
        .then((result) => console.log(result))
        .catch((error: Error) => res.status(500).json({ message: error.message, stack: error.stack }));

    pool.end();
}

// Read all customers
export function readAllCustomer(req: Request, res: Response, next: NextFunction): void {
    pool.query("SELECT * FROM customer")
        .then((rows) =>
            rows.length === 0
                ? res.status(200).json({ message: "There is not customers" })
                : res.status(200).send(rows)
        )
        .catch((err) => res.status(err.status || 500).json({ message: err.message }));

    pool.end();
}

// Delete customer by id
export function deleteCustomerById(req: Request, res: Response, next: NextFunction): void {
    const customerId: string = req.params.id;
    const deleteCustomerQuery: string = `
        DELETE FROM customer
        WHERE customer_id = ?
    `;
    pool.query(deleteCustomerQuery, [customerId])
        .then(console.log)
        .then(() => res.status(200).json({ message: "Deleted customer" }))
        .catch((error: Error) => res.status(500).json({ message: error.message }));

    pool.end();
}
