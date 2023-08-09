var Customers = /** @class */ (function () {
    //properties
    function Customers(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customers.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customers;
}());
// now lets use it
var myCustomers = new Customers("Ritik", "Bohra");
myCustomers.firstName = "Vikram";
console.log(myCustomers.firstName);
// myCustomer.firstName = "rITIK";
// myCustomer.lastName = "Bohra";
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
