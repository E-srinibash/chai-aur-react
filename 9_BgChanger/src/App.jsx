import { useState } from 'react'



function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
        <>
      <div className=' rounded  p-5 bg-slate-300 w-full h-screen' style={{backgroundColor: color}} >
        <div className=' rounded-xl  p-2 fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className=' gap-3 flex flex-wrap justify-center bg-white px-3 py-2 rounded-2xl'>
            <button className=' outline-none px-4 bg-red-500 rounded-3xl text-white 'onClick={()=>setColor("red")}>RED </button>
            <button className=' outline-none px-4 bg-green-500 rounded-3xl text-white 'onClick={()=>setColor("green")}>GREEN </button>
            <button className=' outline-none px-4 bg-blue-500 rounded-3xl text-white 'onClick={()=>setColor("blue")}>BLUE </button>
            <button className=' outline-none px-4 bg-gray-500 rounded-3xl text-white 'onClick={()=>setColor("gray")}>GRAY </button>
            <button className=' outline-none px-4 bg-yellow-500 rounded-3xl text-white 'onClick={()=>setColor("yellow")}>YELLOW</button>
            <button className=' outline-none px-4 bg-pink-500 rounded-3xl text-white 'onClick={()=>setColor("pink")}>PINK </button>
            <button className=' outline-none px-4 bg-purple-500 rounded-3xl text-white 'onClick={()=>setColor("purple")}>PURPLE </button>
            <button className=' outline-none px-4 bg-white shadow-xl rounded-3xl text-black 'onClick={()=>setColor("white")}>WHITE </button>
            <button className=' outline-none px-4 bg-black rounded-3xl text-white 'onClick={()=>setColor("black")}>BLACK </button>
            
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default App
