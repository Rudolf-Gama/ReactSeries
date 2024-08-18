import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let arr=[1,2,3]
  const obj={
    name:"John",
    age:30
  }
  
  return (
    <>
      <h1 className='bg-green-400  text-white p-4 rounded-xl mb-5'>
       Tailwind!
      </h1>
      <Card Username='Rude' details='This is my laptop' btntxt='Know me'/>
      <Card Username='Atticus' details='This is mu Mac book' btntxt='About me' />
    </>
  )
}

export default App
