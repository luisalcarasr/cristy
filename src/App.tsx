import {Counter} from './components';
import {Collage} from './components/Collage/Collage';
import {Preview} from './components/Preview/Preview';
import {useEffect} from "react";
import {throwConfetti} from "./utils";

const App = () => {
  useEffect(() => {
    throwConfetti()
  }, []);
  return (
    <>
      <Collage/>
      <div className='relative z-10 flex flex-col justify-center h-screen'
           style={{position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)'}}>
        <div className='flex justify-center align-middle'>
          <Preview/>
        </div>
        <Counter/>
      </div>
    </>
  )
}

export default App
