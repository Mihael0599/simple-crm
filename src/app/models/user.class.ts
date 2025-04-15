import { last, zip } from "rxjs";

export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    /* email: string; */
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.firstName : '';
        this.birthDate = obj ? obj.firstName : '';
        this.street = obj ? obj.firstName : '';
        this.zipCode = obj ? obj.firstName : '';
        this.city = obj ? obj.firstName : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            /* email: this.email, */
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        };
    }
}