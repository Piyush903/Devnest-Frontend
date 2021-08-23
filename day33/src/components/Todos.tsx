import React from 'react'
import { Itodo } from './TodoList'

interface Todo{
    todo:Itodo
}
const Todos = ({todo}:Todo) => {
    return (
        <div>
           {JSON.stringify(todo)} 
        </div>
    )
}

export default Todos
