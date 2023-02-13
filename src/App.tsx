import './App.css';
import { useState } from 'react';
import Calculate from './components/Calculate';
import { IHours } from './components/HoursInterface';

const App: React.FC = () => {

  const DAYSOFWEEK: string[] = ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"];

  const [weeklyHours, setWeeklyHours] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] =useState<string>("");

  
  const calculateHoursWorked = (hours: IHours, index: number, day: string) => {
    const hoursWorked = Calculate(hours);
    if (hoursWorked > 17 || hoursWorked < 0) return setErrorMessage(`${day} cannot exceed 17 hours`);
    //Saves everything in existing array to a copy to mutate contents inside
    const newArray = [...weeklyHours];
    newArray[index] = Number(hoursWorked);
    //Saves mutated copy to the state variable
    setWeeklyHours(newArray);
    setErrorMessage("");
  }

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
