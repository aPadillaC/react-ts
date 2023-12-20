
import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />

      <h2>useState</h2>
      <Counter></Counter>
      <Usuario></Usuario>


      <h2 className='mt-5'>useEffect - useRef</h2>
      <hr />

      <TimerPadre></TimerPadre>
    </>
  );
}

export default App;
