import { useState } from 'react'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  const add = ()=>{
    if(count == 20)
    return;
     setCount(count + 1)
  }

  const sub = ()=>{
     if(count == 0)
     return;
     setCount(count - 1);
  }
  
  return (
    <>
     <h1>Chai aur React</h1>
     <button onClick={add}>Add value</button>
     <br />
     <div>{count}</div>
     <br/>
     <button onClick={sub}>Remove value</button>
    </>
  )
}

export default App
