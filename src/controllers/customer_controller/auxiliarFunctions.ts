type CompareIdFunction = (x: { customer_id: number }, y: { customer_id: number }) => number;

export const compareIdsFunction: CompareIdFunction = (c1, c2) =>
    c1.customer_id < c2.customer_id ? -1 : c1.customer_id > c2.customer_id ? 1 : 0;
