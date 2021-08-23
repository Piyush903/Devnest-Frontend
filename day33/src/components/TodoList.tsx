import React, { ReactElement } from 'react'
import { FC,useState} from 'react'
import Todos from './Todos'

 export interface Itodo{
    name:string
}
const TodoList= ():ReactElement => {
    const[input,setInput]= useState<string>('')
    const[todos,setTodos]=useState<Itodo[]>([])
    const[loading,setLoading]=useState<boolean>(false)
    let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    }
    let handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
    }
    let handleClick=()=>{
        setLoading(true)
setTimeout(()=>{
    setTodos([
        ...todos,
        {name:input},
    ])
},2000) 
setLoading(false)
}
    return (
        <section >
            <form className="todoForm" onSubmit={handleSubmit}>
                <h1>Todo typescript</h1>
                <input type="text" onChange={handleChange} />
                <button
                onClick={handleClick}>Add todo</button>
                </form>
                {loading?<h3>Loading..</h3>:null}
                <h1>
            {input}
            </h1>
            
            <section>
                {
                    todos.map((todo,id)=>(
                        <Todos key={id} todo={todo}/>
                    ))
                }
            </section>
        </section>
    )
}

export default TodoList
