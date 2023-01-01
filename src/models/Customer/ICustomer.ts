export interface ICustomer {
    customerId: number;

    storeId: number;

    firstname: string;

    lastname: string;

    email: string;

    address: number;

    active: number;

    createDate: Date;

    lastUpdate: Date;

}

export interface ICustomerDto {

    storeId: number;

    firstname: string;

    lastname: string;

    email: string;

    address: number;

    active: number;

    createDate: Date;

    lastUpdate: Date;
}
