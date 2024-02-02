import { useState } from 'react'

function Button(props){
  
  if(props.color == "white"){
  return(
    <>
    <button className={` outline-none px-4 bg-${props.color}  rounded-3xl text-red-900 shadow-md `}
    onClick={props.onClick}>
      {props.value} 
    </button></>
  )
 }
 if(props.color == "black"){
  return(
    <>
    <button className={` outline-none px-4 bg-${props.color}  rounded-3xl text-rose-100 `}
    onClick={props.onClick}>
      {props.value} 
    </button></>
  )
 }
  return(
    <button className={` outline-none px-4 bg-${props.color}-500  rounded-3xl text-white `}
    onClick={props.onClick}>
      {props.value} 
    </button>
  )
  
}

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
        <>
      <div className=' rounded  p-5 bg-slate-300 w-full h-screen' style={{backgroundColor: color}} >
        <div className=' rounded-xl  p-2 fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className=' gap-3 flex flex-wrap justify-center bg-white px-3 py-2 rounded-2xl shadow-md '>
            <Button color="red" onClick={()=>setColor("red")} value="RED"/>
            <Button color="green" onClick={()=>setColor("green")} value="GREEN"/>
            <Button color="blue" onClick={()=>setColor("blue")} value="BLUE"/>
            <Button color="gray" onClick={()=>setColor("gray")} value="GRAY"/>
            <Button color="yellow" onClick={()=>setColor("yellow")} value="YELLOW"/>
            <Button color="pink" onClick={()=>setColor("pink")} value="PINK"/>
            <Button color="purple" onClick={()=>setColor("purple")} value="PURPLE"/>
            <Button color="white" onClick={()=>setColor("white")} value="WHITE"/>
            <Button color="black" onClick={()=>setColor("black")} value="BLACK"/>
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default App