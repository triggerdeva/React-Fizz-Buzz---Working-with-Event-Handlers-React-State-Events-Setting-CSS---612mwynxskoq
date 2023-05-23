import React from 'react'
import { useState } from 'react';
import '../styles/App.css';
const App = () => {
  let [value, setValue] = useState(1);
  let colorClass ="";
  // let [colorClass, setColorClass] = useState("normal")
  function onIncrementClick(){
    value = value+1;
    setValue(value);
  }
  function onDecrementClick(){
    value = value-1;
    setValue(value);
  }
  if(value%15 == 0) colorClass = "fizzbuzz";
  else if(value%3 == 0) colorClass = "fizz";
  else if(value%5 == 0) colorClass = "buzz";
  else colorClass = "normal";
  return (
    <div id="main">
      <button onClick={onIncrementClick} id='increment'>Increment</button>
      <div className={colorClass} id='counter'>{value}</div>
      <button onClick={onDecrementClick} id='decrement'>Decrement</button>
    </div>
  )
}


export default App;
