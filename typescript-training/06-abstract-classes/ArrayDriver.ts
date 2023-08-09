import {Shape} from './Shape';
import {Cricle} from './Cricle';
import { Rectangle } from './Rectangle';



let myCricle = new Cricle(5, 10, 20);
let myRectangle = new Rectangle(5,10,2,3);

let theShapes: Shape[] = [];



theShapes.push(myCricle);
theShapes.push(myRectangle);


for(let i of theShapes){
    console.log(i.getInfo());
    console.log("Arae "+ i.calculateArea());
    console.log();

}










//console.log("hello");

