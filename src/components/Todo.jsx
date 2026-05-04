import { useEffect, useRef, useState } from "react";
import todo from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {

  

    const inputRef=useRef()
    const[todoList,setTodoList]=useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [] )

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todoList))
    },[ todoList])

  const add=()=>{
   const inputText= inputRef.current.value.trim()

   if(inputText === ""){
    return null
   }

   const todo={
    id:Date.now(),
    text:inputText,
    isCompleted:false
   }

   setTodoList([todo,...todoList])

  inputRef.current.value=""

  console.log(todoList)
  }

  const deleteTodo=(id)=>{
    setTodoList(todoList.filter(item=>item.id!==id))
  }

  const toggleComplete=(id)=>{
    setTodoList((prevList)=>(
      prevList.map(item=>(
        item.id  === id ? {...item,isCompleted:!item.isCompleted} : item
      ))
    ))
  }
  return (
    <div
      className="w-[80%] bg-white place-self-center max-w-md
        flex flex-col min-h-137.5 rounded-xl p-7 
    "
    >
      {/* ------title------ */}
      <div className="flex items-center gap-2 mt-7">
        <img className="w-8" src={todo} alt="Todo Icon" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* ------input------ */}
      <div
        className="my-7 bg-gray-200 flex items-center
         rounded-full
         "
      >
        <input ref={inputRef}
          className="bg-transparent border-0
            outline-none h-14 flex-1 pl-6 pr-2
            placeholder-gray-500
            "
          type="text"
          placeholder="Add a new task... "
        />
        <button onClick={add}
          className="border-none bg-orange-600
            rounded-full w-32 h-14 text-white
            text-lg font-medium cursor-pointer
            "
        >
          ADD +
        </button>
      </div>

      {/* -------TO-DO LIST------- */}
      <div>
        {
          todoList.map((item,index)=>(
            <TodoItems key={index} id={item.id} deleteTodo={deleteTodo} toggleComplete={toggleComplete}
            text={item.text } isCompleted={item.isCompleted} />
          ))
        }
      </div>
    </div>
  );
};

export default Todo;
