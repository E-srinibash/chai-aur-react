import Chai from "./Chai.jsx"
import React, { useState } from "react"

const Counter = () =>{
  const [count , setCount] = useState(0);
  
  return(
   <>
    <button onClick={()=>{
      setCount(count-1)
    }}>-</button>
    <div>{count}</div>
    <button onClick={()=>{
      setCount(count+1)}}>+</button>
   </>    
  )
}
const App = () => {
 
  return (
   <>
   <Chai />
   <Counter />
   </>
  )
}

export default App
