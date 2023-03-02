import React, {useState,useEffect} from 'react';
import Clock from "./components/Clock";
import './App.css';

function App() {
  const [Days, setDays] = useState();
  const [Hours, setHours] = useState();
  const [Minutes, setMinutes] = useState();
  const [Seconds, setSeconds] = useState();


  let interval;

const startTimer=()=>{
const countDownDate = new Date("March 11,2023").getTime();

interval = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days=Math.floor(distance/(24 * 60 * 60 * 1000));
  const hours=Math.floor(distance % (24 * 60 * 60 * 1000)/(1000 * 60 * 60));
  const minutes=Math.floor(distance % (60 * 60 * 1000)/(1000 * 60));
  const seconds=Math.floor(distance % (60 * 1000)/(1000));

  if (distance < 0) {
    //stop timer

    clearInterval(interval.current);
  }else{
    //update timer

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }
});
};

useEffect(() => {
startTimer();
})

  
return (
  <div className='App'>
       <h1>Timer</h1>
    <Clock Days={Days} 
    Hours={Hours} 
    Minutes={Minutes} 
    Seconds={Seconds}/>
  </div>
);
}

export default App;

