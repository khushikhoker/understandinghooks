import React, { useState } from 'react';






const App = () => {
  // const state = useState();

  // const [count, setCount] = useState(0);
let newTime = new Date().toLocaleTimeString();
const [ctime, setCount] = useState(newTime);
  const IncNum =()=>{
    newTime = new Date().toLocaleTimeString();
    setCount(newTime);
  }
  // const IncNum = () =>{
  //     setCount(count+1);
  // };
  return(
    <>
    <h1>{newTime}</h1>
    <button className="but" onClick={IncNum}>Click Me</button>
    </>
  );
}
export default App;
