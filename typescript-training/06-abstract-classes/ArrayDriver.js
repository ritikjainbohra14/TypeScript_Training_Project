"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cricle_1 = require("./Cricle");
var Rectangle_1 = require("./Rectangle");
var myCricle = new Cricle_1.Cricle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(5, 10, 2, 3);
var theShapes = [];
theShapes.push(myCricle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var i = theShapes_1[_i];
    console.log(i.getInfo());
    console.log("Arae " + i.calculateArea());
    console.log();
}
//console.log("hello");
