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
        .then((result) =>
            res.status(200).json({ message: "Registered customer", insertedId: parseInt(result.insertId) })
        )
        .catch((error: Error) => res.status(500).json({ message: error.message }));
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
}

//Update customer by id
export function updateCustomerById(req: Request, res: Response, next: NextFunction) {
    const customerId: string = req.params.id;
    const { storeId, firstname, lastname, email, addressId, active, createDate, lastUpdate } = req.body;
    const updateCustomerQuery: string = `
        UPDATE customer
        SET store_id = IFNULL(?,store_id),
            first_name = IFNULL(?,first_name),
            last_name = IFNULL(?,last_name),
            email = IFNULL(?,email),
            address_id = IFNULL(?,address_id),
            active = IFNULL(?,active),
            create_date = IFNULL(?,create_date),
            last_update = IFNULL(?,last_update)
        WHERE customer_id = ?
        
    `; // do not forget the where clause, this is very important !!!

    pool.query(updateCustomerQuery, [
        storeId,
        firstname,
        lastname,
        email,
        addressId,
        active,
        createDate,
        lastUpdate,
        customerId,
    ])
        .then((result) =>
            result.affectedRows === 0
                ? res.status(500).json({ message: "Not is possible update the customer. Not found" })
                : res.status(200).json({ message: "Updated customer" })
        )
        .catch((error: Error) =>
            res.status(500).json({ message: "An error has occurred", error: error.message })
        );
}

// Delete customer by id
export function deleteCustomerById(req: Request, res: Response, next: NextFunction): void {
    const customerId: string = req.params.id;
    const deleteCustomerQuery: string = `
        DELETE FROM customer
        WHERE customer_id = ?
    `;
    pool.query(deleteCustomerQuery, [customerId])
        .then((result) =>
            result.affectedRows === 0
                ? res.status(500).json({ message: "Customer not found" })
                : res.status(200).json({ message: "Deleted customer" })
        )
        .catch((error: Error) => res.status(500).json({ message: error.message }));
}
