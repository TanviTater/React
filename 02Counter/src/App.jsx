import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5);

  const addValue = () =>{
    console.log("Clicked",counter)
    counter = counter+1
    setCounter(counter);
  }

  const removeValue = () =>{
    console.log("Decreased",counter)
    setCounter(counter-1);
  }
  
  return (
    <>
      <h1>React</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      <br/>
    </>
  )
}

export default App
