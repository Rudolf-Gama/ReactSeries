import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let Counter=15;
  
  //const [Counter, setCounter] = useState(15);
  let [Counter, setCounter] = useState(15);

  const addValue=()=>{
    if(Counter<20){
    Counter=Counter+1;
    setCounter(Counter);
    }
   // setCounter(Counter+1); with this  const will work
    console.log(Counter);
  }

  const RemoveValue=()=>{
    if(Counter>0)
     setCounter(Counter-1);
     console.log(Counter)
  }

  return (
    <>
      <h1>Project Using Hooks</h1>
      <h3>Counter Value : {Counter}</h3>
      <button onClick={addValue}>Increment {Counter}</button>
      <br/>
      <button onClick={RemoveValue}>Decrement {Counter} </button>
    </>
  )
}

export default App
