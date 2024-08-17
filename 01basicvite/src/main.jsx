import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return (
    <>
    <h1>DSA with Striver</h1>
    </>
  )
}
/* the below Object wont execute since the object format is not wrt to react documentaion. Hence error*/
const ReactElement={
  type: 'a',
  props:{
      href: 'https://www.google.com',
      target:'_blank'
  },
  children: 'Google'
}

/* the below Object executes since react converts object html to its respective object of its own valid format*/
const Another=(
  <a href="https://www.google.com" target='_blank'>Google Here</a>
)


const username=" and flipkart"
/* Creating element according to react format */
const ReactElementation=React.createElement(
     'a',
     {
      href: 'https://www.amazon.com',
      target: '_blank'
     },
     'Amazon',
     username
)

createRoot(document.getElementById('root')).render(
  ReactElementation
)
