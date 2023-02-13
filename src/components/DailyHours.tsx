import { ReactElement, useState } from "react";
import { IHours } from "./HoursInterface";

interface IProps {
    calculateHoursWorked: "function",
    day: string, 
    index: number, 
    weeklyHours: number[]
}

const DailyHours = (props: IProps): ReactElement => {

    const { calculateHoursWorked, day, index, weeklyHours } = props;
    
  //State variable for tracking hours input
  const [hours, setHours] = useState<IHours>({
    inHours: 0,
    inMinutes: 0,
    outHours: 0,
    outMinutes: 0,
    inTimeOfDay: "",
    outTimeOfDay: "",
    lunchDeduction: 0
});

    //Watches the changes from the input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setHours({ ...hours, [name]: value });
    }

    return (
        <tr>
            <td>
                {day}
            </td>
            <td>
                <div>
                    <input type="number" min={0} name="inHours"  value={hours.inHours} onChange={(e)=>handleChange(e)} /> :
                    <input type="number" min={0} name="inMinutes" value={hours.inMinutes} onChange={(e)=>handleChange(e)} />
                    <select name="inTimeOfDay" value={hours.inTimeOfDay} onChange={(e)=>handleChange(e)}>
                        <option defaultValue={hours.inTimeOfDay}>AM</option>
                        <option>PM</option>
                    </select>
                </div>
            </td>
            <td>
                <div>
                    <input type="number" min={0} name="outHours" value={hours.outHours} onChange={(e)=>handleChange(e)} /> :
                    <input type="number" min={0} name="outMinutes" value={hours.outMinutes} onChange={(e)=>handleChange(e)} />
                    <select name="outTimeOfDay" value={hours.outTimeOfDay} onChange={(e)=>handleChange(e)}>
                        <option defaultValue={hours.inTimeOfDay}>AM</option>
                        <option>PM</option>
                    </select>
                </div>
            </td>
            <td>
                <input type="number" name="lunchDeduction" value={hours.lunchDeduction} onChange={(e)=>handleChange(e)} />
            </td>
            <td>
                <button disabled={hours.inHours === 0 || hours.outHours === 0 ? true: false} onClick={()=>calculateHoursWorked(hours, index, day)}>Calculate</button>
            </td>
            <td>
                {weeklyHours[index]}
            </td>
        </tr>

    )
}

export default DailyHours