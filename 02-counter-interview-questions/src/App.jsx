import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inc =()=>{
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
  }

  const dec = () => {
    if(count>0)
    setCount(count - 1)
  }


  return (
    <>
     <div>
        <h1>Counter</h1>
        <button onClick={inc}>Add</button>
        <button onClick={dec}>Decrease</button>
        <h1>{count}</h1>
     </div>
    </>
  )
}

export default App
