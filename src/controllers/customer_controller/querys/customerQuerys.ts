// QUERYS
export const insertNewCustomerQuery: string = `
    INSERT INTO customer(
        customer_id,
        store_id,
        first_name,
        last_name,
        email,
        address_id,
        active,
        create_date,
        last_update
    )
    VALUES(?,?,?,?,?,?,?,?,?)
`;

export const maxValueOfTableQuery: string = `
    SELECT AUTO_INCREMENT 
    FROM information_schema.TABLES 
    WHERE TABLE_SCHEMA = "sakila" AND TABLE_NAME = "customer"
`;

export const missingNumbersQuery: string = `
    SELECT seq 
    FROM seq_0_to_? 
    EXCEPT SELECT customer_id FROM customer
`;

export const updateNewCustomer: string = `
    UPDATE customer 
    SET customer_id = ? 
    WHERE customer_id = ?
` ;