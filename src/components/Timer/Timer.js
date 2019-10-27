import React from "react";
import Slide from "react-reveal/Slide"
import './Timer.sass'

const Timer = () => {
  return (
   <Slide left delay={1000}>
    <div className="countdown-wrapper">
      <div className="countdown-top">До конца предложения осталось:</div>
      <div className="countdown-bottom">
        <div className="countdown-item">
          <div className="countdown-time">15</div>
          <div className="countdown-tag">дней</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-time">15</div>
          <div className="countdown-tag">часов</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-time">15</div>
          <div className="countdown-tag">мин</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-time">15</div>
          <div className="countdown-tag">сек</div>
        </div>
      </div>
    </div>
   </Slide> 
   );
 };
   
    

export default Timer;