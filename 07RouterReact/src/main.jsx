import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contactus.jsx'
import User from './components/User/User.jsx'
import Github, { GithubLoaderInfo } from './components/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//          path:'/',
//          element:<Layout/>,
//          children: [
//           {
//             path:"",
//             element:<Home/>
//           },
//           {
//             path:"about",
//             element:<About/>
//           },
//           {
//            path:"Contact Us",
//            element:<Contact/>
//           }
//          ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="Contact Us" element={<Contact/>}></Route>
      <Route 
       loader={GithubLoaderInfo}
       path="Github" 
       element={<Github/>}
       
       ></Route>
      <Route path="user/:Userid" element={<User/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
