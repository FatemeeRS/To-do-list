import React , {useState} from 'react'
import ConfirmModal from './Modal/Modal';
import './NavBar.css'


const todoEx = {
  title : "title", 
  id : 1 , 
  done : false

}

const Navbar = () => {
  const [todoList , setTodoList] = useState([])

  const [inputValue, setInputValue] = useState("")


  const addTodo = (event) =>{
    if(event.key === "Enter" && inputValue.length > 0){
      setTodoList(value => [
        {
          title : inputValue , 
          id : value.length <= 0 ? 0 : value[0].id+1 , 
          done : false
        },...value
      ])
    setInputValue("")
    }
  }

  const handleChange = (event) =>{
    setInputValue(event.target.value)
  }

  const handleDone = (id) =>{
    setTodoList(todoList.map(todo => todo.id === id ? {...todo , done : !todo.done} : todo))
  }

  const handleDelete = (id) =>{
    setTodoList(todoList.filter(todo => todo.id !== id))
  }
  
  
  return(
  <div className='Navbar'> 
    <h3> TO DO</h3>
    <div className='Nabar_input'> 
        <input onKeyDown={addTodo} type="text" placeholder="new doing" value={inputValue} onChange={handleChange} />
    </div>
    <div className='todo-box'>
      {todoList.map(todo => (
        <div className='todo' > 
          <div>
            <span onClick={() => handleDone(todo.id)} className={" done-box " + (todo.done ? "done" : "")}></span>
            <span className={' text-box ' + (todo.done ? "done" : "")}> {todo.title} </span>
          </div>
          <ConfirmModal onOk={() => handleDelete(todo.id)} text={"Are you sure?"}  />
      
        </div>

      ))}
    </div>

  </div>
)
};

export default Navbar

