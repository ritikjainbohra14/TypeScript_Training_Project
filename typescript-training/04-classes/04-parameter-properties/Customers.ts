class Customers {
    //properties

    constructor(private _firstName: string, private _lastName: string){

    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }




}

// now lets use it

let myCustomers = new Customers("Ritik", "Bohra");

myCustomers.firstName = "Vikram";

console.log(myCustomers.firstName);

// myCustomer.firstName = "rITIK";
// myCustomer.lastName = "Bohra";

console.log(myCustomers.firstName);
console.log(myCustomers.lastName);