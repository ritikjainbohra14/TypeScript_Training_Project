"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricketCoach = new CricketCoach_1.CrciketCoach();
var myGolCoach = new GolfCoach_1.GolfCoach();
var theCoaches = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var iterator = theCoaches_1[_i];
    console.log(iterator.getDailyWorkout());
}
