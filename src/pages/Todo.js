import React, { useState } from 'react'

export default function Todo() {

    const [content, setContent] = useState('')
    const [todos, setTodos] = useState([
        {id:1, todo: "membuat todos"},
    {id:2, todo: "belajar state"},
    ])
    const handleChange = (event) =>{
        setContent(event.target.value)
    }
    const submitTodo = (event) =>{
        event.preventDefault()

        let newTodo = {
            id: 1,
            todo:content
        }

        if(todos.length>0){
            newTodo.id = todos[todos.length-1].id+1
        }

        setTodos([...todos, newTodo])
        setContent('')

    }

    const deleteTodo = (itemDel) => {
        let newTodos = todos.filter((item) => (item.id !== itemDel.id))
    
        setTodos(newTodos)
        console.log(newTodos)
      }

      const [scracth, setscratch] = useState('');

      const styles = {
          'text-decoration-line': scracth,
          display: "inline",
          
      };
      const onSratch = (itemScratch) =>{
        //   e.preventDefault()
        todos.filter((item) => (item.id !== itemScratch.id))
          setscratch('line-through')
      }
    

    return (
        <div>
            <form>
                <textarea 
                onChange={handleChange}
                name='content' 
                placeholder='insert your to do list'></textarea>
                <button onClick={submitTodo}>Add</button>
            </form>
            <ul>
            {todos.map((item) => (
          <div key={item.id} style={styles}>
            <li >{item.todo}</li>
            <button onClick={() => {deleteTodo(item)}}>x</button>
            <button onClick={()=> onSratch(item)}>mark as completed</button>
          </div>
        ))}
            </ul>
        </div>
    )
}
