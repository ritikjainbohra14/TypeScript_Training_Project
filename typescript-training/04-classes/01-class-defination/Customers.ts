class Customer {
    //properties

    private firstName: string;
    private lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

// now lets use it

let myCustomer = new Customer("Ritik", "Bohra");

// myCustomer.firstName = "rITIK";
// myCustomer.lastName = "Bohra";

//console.log(myCustomer.firstName);
//console.log(myCustomer.lastName);