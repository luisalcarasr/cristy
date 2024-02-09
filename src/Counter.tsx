import { Duration, formatDuration } from "date-fns";

type CounterProps = {
  duration: Duration 
};

export const Counter: React.FC<CounterProps> = ({duration}) => {
  return (<>
    {formatDuration(duration)}
  </>)
};
