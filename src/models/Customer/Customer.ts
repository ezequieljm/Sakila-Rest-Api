import { ICustomer } from "./ICustomer";

class Customer implements ICustomer {
    customerId: number = 0;

    storeId: number = 0;

    firstname: string = "";

    lastname: string = "";

    email: string = "";

    address: number = 0;

    active: number = 0;

    createDate: Date = new Date();

    lastUpdate: Date = new Date();

    public constructor(
        customerId: number,
        storeId: number,
        firstname: string,
        lastname: string,
        email: string,
        address: number,
        active: number,
        createDate: Date,
        lastUpdate: Date
    ) {
        this.customerId = customerId;
        this.storeId = storeId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.address = address;
        this.active = active;
        this.createDate = createDate;
        this.lastUpdate = lastUpdate;
    }
}

export default Customer;