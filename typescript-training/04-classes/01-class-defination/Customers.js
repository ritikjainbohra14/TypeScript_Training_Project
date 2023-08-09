var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// now lets use it
var myCustomer = new Customer("Ritik", "Bohra");
// myCustomer.firstName = "rITIK";
// myCustomer.lastName = "Bohra";
//console.log(myCustomer.firstName);
//console.log(myCustomer.lastName);
