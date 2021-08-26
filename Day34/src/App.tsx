import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreator,State } from './state/index';

function App() {
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney,bankrupt}=bindActionCreators(
    actionCreator,
    dispatch
  )
  const state = useSelector((state:State)=>state.bank)
  return (
    <div className="App">
    <h1>{state}</h1>
    <button onClick={()=>depositMoney(1000)} >Deposit</button>
    <button onClick={()=>withdrawMoney(1000)}>Withdraw</button>
    <button onClick={()=>bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
