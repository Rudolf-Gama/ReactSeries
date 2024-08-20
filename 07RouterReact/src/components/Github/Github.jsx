import React, {useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
     const data=useLoaderData()

    // const [data,setData]=useState([])

    // useEffect(() => {
    //    fetch('https://api.github.com/users/Rudolf-Gama')
    //    .then(responce=>responce.json())
    //    .then(data=> {               
    //     setData(data)
    //     console.log(data);
    //    })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github followers :{data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}


export default Github

export  const  GithubLoaderInfo=async()=>{
    const response=await fetch('https://api.github.com/users/Rudolf-Gama')
    return response.json()
}

