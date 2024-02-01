import { useState } from 'react'
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)

  const obj = {
    name:"Srinibash",
    age:20
  }

  return (
    <>
      <h1 className=' bg-green-300 p-4 rounded-xl flex '>Tailwind Test</h1> 
      <Card channel="chai aur code" button="Subscribe me"/>     
      <Card channel="chai aur js" button="please Subscribe" obj={obj.name}/>     
    </>
  )
}

export default App
