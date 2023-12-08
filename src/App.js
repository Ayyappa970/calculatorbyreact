import { useState } from 'react';
import './App.css';
import Keypad from './Keypad';

function App() {
  let [input,update]=useState('')
  function handleClick(value){
    update(input+value)
  }
  function result(){
    update(eval(input))
  }
  function allClear(){
    update('')
  }
  function clear(){
    update(input.slice(0,-1))
  }
  return (
    <center>
      <h1>Calculator App</h1>
      <input value={input}/>
      <Keypad handleClick={handleClick} allClear={allClear} clear={clear} result={result}></Keypad>
    </center>
  );
}

export default App;
