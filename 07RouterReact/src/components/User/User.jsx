import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

 const {Userid} =useParams()

  return (
    <div className='text-center text-white bg-gray-700 text-3xl p-4'>User :{Userid}</div>
  )
}

export default User