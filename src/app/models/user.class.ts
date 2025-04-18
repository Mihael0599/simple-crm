export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    email: string;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj?.firstName || '';
        this.lastName = obj?.lastName || '';
        this.birthDate = obj?.birthDate || 0;
        this.email = obj?.email || '';
        this.street = obj?.street || '';
        this.zipCode = obj?.zipCode || 0;
        this.city = obj?.city || '';
    }
    

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            email: this.email,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        };
    }
}