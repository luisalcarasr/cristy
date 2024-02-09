import { Slot } from "./Slot";
import { useEffect, useState } from 'react';
import { intervalToDuration } from 'date-fns';

const BEGINNING = new Date('2023-11-20 22:00:00 GMT-0600');

export const Counter = () => {
  const [duration, setDuration] = useState(intervalToDuration({start: BEGINNING, end: new Date()}))

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(intervalToDuration({start: BEGINNING, end: new Date()}))
    }, 1000);
    return () => clearInterval(interval);
  }, [])
  return (<div className="flex justify-center">
    <Slot content={duration.years} label="Years"/>
    <Slot content={duration.months} label="Months"/>
    <Slot content={duration.days} label="Days"/>
    <Slot content={duration.hours} label="Hours"/>
    <Slot content={duration.minutes} label="Minutes"/>
    <Slot content={duration.seconds ?? 0} label="Seconds"/>
  </div>)
};
