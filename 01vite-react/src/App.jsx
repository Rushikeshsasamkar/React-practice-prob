import { useState } from "react"
import './App.css'
import Card from './Card'

function App() {
  const [counter, setCounter] = useState(0);

  const data = {
    name: "Rahul dravid",
    age: 23
  }

  return (
    <div className="container ml-20 flex gap-3 flex-r columns-3 mt-10">
      <Card name={"Ramesh"} />
      <Card name={"Rushi"} />
      <Card name={"Raj"} />
    </div>



  )
}

export default App
