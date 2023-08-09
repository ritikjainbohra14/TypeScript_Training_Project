import { Coach } from "./Coach";
import { CrciketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CrciketCoach();
let myGolCoach = new GolfCoach();


let theCoaches: Coach[] = [];


theCoaches.push(myCricketCoach);
theCoaches.push(myGolCoach);


for (let iterator of theCoaches) {
    console.log(iterator.getDailyWorkout());
}