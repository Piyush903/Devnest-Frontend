import React,{useState,useReducer} from 'react';
import './App.css';

const reducerFunction=(state,action)=>{
  switch(action.type){
    case 'increment':return{
      ...state,
      count:state.count+1
    }
    case 'decrement':return{
      ...state,
      count:state.count-1
    }
    case 'initcount':return{
      ...state,
      count:action.payload
    }
    default:return state
  }
};
const initialState={
  count:0
};
function App() {
  const [input,setInput]=useState(0);
  const [state,dispatch] =useReducer(reducerFunction,initialState);
  return (
    <div className="App">
      <h1>Reducer example</h1>
    <div>
      <label>start count</label>
      <input
      type="number"
      onChange={(e)=>setInput(parseInt(e.target.value))}
      value={input}/>
      <br/>
      <button onClick={()=>dispatch({type:'initcount',payload:input})}>Initailise counter</button>
    </div>
    <p>{state.count}</p>
    <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
    <button onClick={()=>dispatch({type:'decrement'})}>Decremnet</button>
    </div>
  );
}

export default App;
