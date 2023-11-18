import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter++;
    if(counter < 20)
    setCounter(counter + 1)   
  }

  const subValue = () => {
    if(counter >0 )
    setCounter(--counter);
  } 

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button 
      onClick={subValue}
      >remove value</button>
    </>
  )
}

export default App
