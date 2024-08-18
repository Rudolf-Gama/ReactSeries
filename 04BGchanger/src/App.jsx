import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
const [Color,setColor]=useState("Olive")
  return (
    <div className="w-full h-screen duration-150 "
    style={{backgroundColor: Color}}>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-3xl" >
          <button onClick={()=>setColor("red")} className ='outline-none px-4 py-1 text-white rounded-full shadow-lg' style={{backgroundColor:"red"}}>
            Red</button>

          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 text-white rounded-full shadow-lg' style={{backgroundColor:"green"}}>
            Green</button>

          <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 text-white rounded-full shadow-lg' style={{backgroundColor:"yellow"}}>
            Yellow</button>

          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 text-white rounded-full shadow-lg' style={{backgroundColor:"blue"}}>
            Blue</button>

          <button onClick={()=>setColor("violet")} className='outline-none px-4 py-1 text-white rounded-full shadow-lg' style={{backgroundColor:"violet"}}>
            Violet</button>

          <button onClick={()=>setColor("indigo")} className='outline-none px-4 py-1 text-white rounded-full shadow-lg' style={{backgroundColor:"indigo"}}>
            Indigo</button>

        </div>
      </div>
    </div>
  )
}

export default App
