import { Counter } from './components';
import { Collage } from './components/Collage/Collage';

const App = () => (
  <>
    <Collage />
    <div className='relative z-10'>
      <Counter/>
    </div>
  </>
)

export default App
