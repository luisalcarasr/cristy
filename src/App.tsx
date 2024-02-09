import './App.css';
import { useEffect, useState } from 'react';
import { formatDistanceToNow, formatDuration, intervalToDuration } from 'date-fns';
import { Counter } from './Counter';

const BEGINNING = new Date('2023-11-20');

function App() {
  // diff between dates in days
  const [distance, setDistance] = useState(formatDistanceToNow(BEGINNING));
  const [duration, setDuration] = useState(intervalToDuration({start: BEGINNING, end: new Date()}))

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(formatDistanceToNow(BEGINNING))
      setDuration(intervalToDuration({start: BEGINNING, end: new Date()}))
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <h1>Cristy y Adrian</h1>️
      <div className="card">
        <p>
          <p>You have been my girlfriend for {distance}, but to be more precise I have been your boyfriend for {formatDuration(duration)}.</p>
        </p>
        <Counter duration={duration}/>
      </div>
    </>
  )
}

export default App
