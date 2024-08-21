import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')

    const {Setuser}=useContext(UserContext);

   const handlesubmit=(e)=>{
        e.preventDefault();
        Setuser({username,password})
   }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}} />
        <input type="text" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login