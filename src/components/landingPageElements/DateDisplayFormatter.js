import { useEffect, useState } from "react";

const DateDisplayFormatter = ({ date }) => {
  //use this to format imported date.
  //an empty props will return the current date.
  let thisDate = date ? new Date(date).getTime() : new Date(Date.now());
  //displayed countdown timer
  let display = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  };
  const [currentDate, setCurrentDate] = useState(new Date(Date.now()));

  useEffect(() => {
    let counter = setInterval(() => {
      setCurrentDate(new Date(Date.now()));
    }, 1000);

    return () => {
      clearInterval(counter);
    };
  }, []);

  //diffferent between current date and future date
  let diff = Math.abs((thisDate - currentDate) / 1000); //To seconds
  // console.log(diff);
  if (diff <= 60) {
    //<= 60sec
    display = {
      seconds: diff,
      minutes: 0,
      hours: 0,
      days: 0,
    };
  } else if (diff <= 3600) {
    //<= 1hr
    const minuteTime = diff / 60;
    const secondTime = (minuteTime % 1) * 60;
    display = {
      seconds: Math.floor(secondTime),
      minutes: Math.floor(minuteTime),
      hours: 0,
      days: 0,
    };
  } else if (diff <= 86400) {
    //<= 24hrs/day
    const hourTime = diff / (60 * 60) - 1;
    const minuteTime = (hourTime % 1) * 60;
    const secondTime = (minuteTime % 1) * 60;
    display = {
      seconds: Math.floor(secondTime),
      minutes: Math.floor(minuteTime),
      hours: Math.floor(hourTime),
      days: 0,
    };
  } else {
    const dayTime = diff / (24 * 60 * 60);
    const hourTime = (dayTime % 1) * 24 - 1;
    const minuteTime = (hourTime % 1) * 60;
    const secondTime = (minuteTime % 1) * 60;
    display = {
      seconds: Math.floor(secondTime),
      minutes: Math.floor(minuteTime),
      hours: Math.floor(hourTime),
      days: Math.floor(dayTime),
    };
  }
  // console.log(display);
  return (
    <div className="grid grid-cols-4 gap-3 w-fit mx-auto">
      <div className="capitalize bg-color-def text-color-pri rounded-md p-3 w-20">
        <div className="font-bold text-2xl">{display.days}</div>
        <div>days</div>
      </div>
      <div className="capitalize bg-color-def text-color-pri rounded-md p-3 w-20">
        <div className="font-bold text-2xl">{display.hours}</div>
        <div>hours</div>
      </div>
      <div className="capitalize bg-color-def text-color-pri rounded-md p-3 w-20">
        <div className="font-bold text-2xl">{display.minutes}</div>
        <div>minutes</div>
      </div>
      <div className="capitalize bg-color-def text-color-pri rounded-md p-3 w-20">
        <div className="font-bold text-2xl">{display.seconds}</div>
        <div>seconds</div>
      </div>
    </div>
  );
};

export default DateDisplayFormatter;
