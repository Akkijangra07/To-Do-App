
import { useState } from 'react'
import './App.css'


function App() {

  
  

    const [input , setInput] = useState("")
    const [todos , setTodos] = useState([])

    
    const handleChange = (e) => {
      setInput(e.target.value)
      
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      setInput("")

    }
    const addTodo = () => {
      if(!input){

      }else{
        setTodos([input ,...todos])
      }
    }

    const handlerDelete = (id) => {
        console.log(id)
        const updatedData = todos.filter((elem,idx)=>{
              return idx!== id;
              
        })
        setTodos(updatedData);
    }

    const removeAll = () => {
        setTodos([])
    }

    
    


  return (
    <>
      <div className="container">
      <h1 className='heading'>Add your list here...</h1>
        <div className="input">
          <form onSubmit={handleSubmit}>
          <input className='todoInput'value={input} type="text" onChange={handleChange} placeholder="What is the task today" autoFocus/>
          <button className='addTodoBtn' onClick={addTodo}>Add</button>
          </form>
        </div>
        <div className="todoItems">
          
            {
              todos.map((element,ind)=>{
                return(
                  <div className="todoItem" key={ind}>
                    <p>{element}</p>
                    <div>
                    
                    <i className="fa-solid fa-trash-can " id='binBtn' onClick={()=>handlerDelete(ind)}></i>
                    </div>
                    </div>
                )
              })
            }       
        </div>
        <div>
          <button className='removeBtn' onClick={removeAll}>Remove All</button>
        </div>
        </div>
        
        
    </>
  )
}

export default App
