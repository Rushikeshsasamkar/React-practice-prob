import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
   <div className='w-full h-screen duration-200'
   style={{backgroundColor:color}}
   >
    <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2'>

        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={()=>setColor('red')}
            style={{backgroundColor:'red'}}
          >Red</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor('green')}
            style={{ backgroundColor: 'green' }}
          >Green</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor('blue')}
            style={{ backgroundColor: 'blue' }}
          >blue</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor('yellow')}
            style={{ backgroundColor: 'yellow' }}
          >yellow</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor('olive')}
            style={{ backgroundColor: 'olive' }}
          >olive</button>
        </div>
    </div>
   </div>
  )
}

export default App
