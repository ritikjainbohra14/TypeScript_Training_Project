import { Coach } from "./Coach";


export class CrciketCoach implements Coach{
    getDailyWorkout(): string {
        return "Practice your spin bowling tech";
    }

}