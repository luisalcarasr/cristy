import { Counter } from './components';
import { Collage } from './components/Collage/Collage';
import { Preview } from './components/Preview/Preview';

const App = () => (
  <>
    <Collage />
    <div className='relative z-10 flex flex-col justify-center h-screen'>
      <div className='flex justify-center align-middle'>
        <Preview />
      </div>
      <Counter/>
    </div>
  </>
)

export default App
