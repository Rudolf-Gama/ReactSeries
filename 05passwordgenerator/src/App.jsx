import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
const [length,setlength]=useState(8)
const [numballow,setnumballow]=useState(false);
const [charallow,setcharallow]=useState(false);
const [Password,setPassword]=useState("")

const passwordRef=useRef(null)

const PasswordGenerator=useCallback((()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(numballow) str+="0123456789";
if(charallow) str+="/!@#$%^&*()_+"

for(let i=1;i<=length;i++){
  let char=Math.floor(Math.random() *str.length+1)
  pass+=str.charAt(char);
}
setPassword(pass)
}),[length,numballow,charallow,setPassword]);

const copyclipboard=useCallback(()=>{
  passwordRef.current?.select();

  navigator.clipboard.writeText(Password)
},[Password])

useEffect(()=>{
  PasswordGenerator()
},[length,numballow,charallow,PasswordGenerator])


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-3 my-8 text-white-500 bg-gray-800'>
      <h1 className='text-center font-bold text-white my-3' >PassWord Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '> 
        <input type="text"  
        value={Password}
         className='outline-none w-full py-1 px-3 bg-slate-200 '
          placeholder='Password' 
          readOnly
          ref={passwordRef}>
          </input>
          <button onClick={copyclipboard}
          className='outline-none bg-blue-700  text-white font-bold px-3 py-0.5 shrink-0 ' >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center mx-2 gap-x-1 text-white'>
          <input type="range" 
          min={6} max={50} 
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setlength(e.target.value)}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center mx-2 gap-x-1 text-white'>
          <input type="checkbox"
          defaultChecked={numballow}
          id="numberInput"
          onChange={(e)=>{
            setnumballow((prev)=>!prev);
          }}>
          </input>
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center mx-2 gap-x-1 text-white'>
          <input type="checkbox"
          defaultChecked={charallow}
          id="charInput"
          onChange={(e)=>{
            setcharallow((prev)=>!prev);
          }}>
          </input>
          <label htmlFor='charInput'>Characters</label>
        </div>
        </div>
     </div>
    </>
  )
}

export default App
