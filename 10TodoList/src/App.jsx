import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './componets/Todoform'
import TodoItem from './componets/TodoItem'

function App() {
  const [todos, settodos] = useState([])
  const addTodo=(todo)=>{
     settodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }

  const updateTodo=(id,todo)=>{
     settodos((prev)=>
      prev.map((eachvalue)=>
      (eachvalue.id===id ? todo : eachvalue)))
  }

  const deleteTodo=(id)=>{
     settodos((prev)=>
     prev.filter((todo)=> todo.id!=id))
  }

 const Togglecomplete=(id)=>{
     settodos((prev)=>
      prev.map((eachvalue)=>eachvalue.id===id ?
      {...eachvalue, completed :!eachvalue.completed}
      : eachvalue))    
 }

 useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0){
    settodos(todos)
  }
 },[])

 useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos))
 },[todos])

  return (
    <TodoProvider value={{addTodo,updateTodo,deleteTodo,todos,Togglecomplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                         <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}/>
                        </div>
                        ))}
                </div>
            </div>
      </div>      
    </TodoProvider>
  )
}

export default App
