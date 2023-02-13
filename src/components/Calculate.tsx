import { IHours } from "./HoursInterface";

//Initialize Global Variables
let inMinutesToHours: number;
let outMinutesToHours: number;
let inHours: number;
let outHours: number;
let hoursWorked: number;
let deduction: number;

 //Calculates total hours
const Calculate = (hours: IHours): number => {
    // Minutes to hours conversions
    inMinutesToHours = hours?.inMinutes / 60;
    outMinutesToHours = hours?.outMinutes / 60;
    inHours = Number(hours?.inHours) + inMinutesToHours;
    outHours = Number(hours?.outHours) + outMinutesToHours;
    deduction = Number(hours?.lunchDeduction) / 60;

    // Case where the time of days are equal to each other. PM == PM or AM == AM
    if (hours?.inTimeOfDay === hours?.outTimeOfDay) {
        if (Number(hours?.inHours) === 12) {
            hoursWorked = outHours - inMinutesToHours - deduction;
        } else {
            hoursWorked = outHours - inHours - deduction;
        }
    }
    //Case where time of day are differnt   
    else {
        if (Number(hours?.outHours) === 12) {
            hoursWorked = (12 - inHours) + outMinutesToHours - deduction;
        } else {
            hoursWorked = (12 - inHours) + outHours - deduction;
        }

    }

    return Number(hoursWorked.toFixed(2));
}

export default Calculate;