import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5);

  const addValue = () =>{
    if(counter <20){
      setCounter(counter+1);
    }
    else{
      setCounter(counter);
    }
  }

  const removeValue = () =>{
    if(counter > 0)
      setCounter(counter-1);
    else{
      setCounter(counter);
    }
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
