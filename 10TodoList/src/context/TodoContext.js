import React, { useContext } from "react";

export const TodoContext=React.createContext({
    todo: [
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=> {},
    Togglecomplete:(id)=>{}
})

export const useTodo=()=>{
   return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider;