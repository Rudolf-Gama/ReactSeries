import { useState ,useEffect} from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'

function App() {
  
  const [theme,Settheme]=useState('light')

  const lightmode=()=>{
       Settheme('light')
  }
  const darkmode=()=>{
       Settheme('dark')
  }

  //actual change of theme 
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(theme)
  },[theme])

  return (
    <ThemeProvider value={{lightmode,darkmode,theme}}>
      <div className="flex flex-wrap min-h-screen items-center">
       <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
             <Card/>
          </div>
       </div>
      </div>
    </ThemeProvider>
  );
}

export default App
