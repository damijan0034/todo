import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"


const TodoItems = ({text,isCompleted,id,deleteTodo,toggleComplete}) => {


  return (
    <div className='flex items-center my-3 gap-2'>
      <div className="flex flex-1  items-center cursor-pointer">
        <img onClick={() => toggleComplete(id)}
         className="w-7" src={isCompleted ? tick : not_tick} alt="" />
        <p className={`text-slate-700 ml-4 text-[17px] ${isCompleted ? 'line-through' : ''}`}>
         {text}</p>
      </div>
      <img className="w-3.5 cursor-pointer" src={delete_icon} alt="delete" onClick={() => deleteTodo(id)} />
    </div>
  )
}

export default TodoItems