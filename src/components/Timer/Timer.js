import React, {useState, useEffect} from "react";
import Fade from 'react-reveal/Fade';
import './Timer.sass'

const Timer = () => {
 const deadline = 'Dec, 31, 2019';

 const [days, setDays] = useState('0');
 const [hours, setHours] = useState('0');
 const [minutes, setMinutes] = useState('0');
 const [seconds, setSeconds] = useState('0');

 const getTimeUntil = (deadline) => {
  const time = Date.parse(deadline) - Date.parse(new Date());
  if(time < 0) {
   console.log("Date passed");
  } else {
   const seconds = Math.floor((time/1000)%60);
   const minutes = Math.floor((time/1000/60)%60);
   const hours = Math.floor((time/(1000*60*60))%24);
   const days = Math.floor(time/(1000*60*60*24));

   setDays(days);
   setHours(hours);
   setMinutes(minutes);
   setSeconds(seconds);
  }
 }
 useEffect(() => {
  setInterval(()=>getTimeUntil(deadline),1000)
 },[seconds])

  return (
   <Fade left delay={3000}>
    <div className="countdown">
      <h4 className="countdown-title">До конца предложения осталось:</h4>
      <div className="countdown-body">
        <div className="countdown-item">
          <div className="countdown-time">{days}</div>
          <div className="countdown-tag">дней</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-time">{hours}</div>
          <div className="countdown-tag">часов</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-time">{minutes}</div>
          <div className="countdown-tag">мин</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-time">{seconds}</div>
          <div className="countdown-tag">сек</div>
        </div>
      </div>
    </div>
   </Fade> 
   );
 };
   
    

export default Timer;