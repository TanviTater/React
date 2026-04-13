import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  const[count,setCount] = useState(0)
  let myObj ={
    username:"Tanvi",
    age: 21
  }
  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400  text-white p-4 rounded-xl'>Tailwind Test</h1>
      {/* <Card name='Tanvi' someObj = {newArr}/> */}
      <Card username='Tanvi' />
      <Card username='Pari' ptext = 'Hello'/>
    </>
  )
}

export default App
