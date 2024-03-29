import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/E-srinibash')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex rounded-md '>  
    <div className="h-1/2 w-1/2 flex" >Github Repos: {data.public_repos}</div>
    <img className="rounded-full h-1/2 w-1/2 relative" src={data.avatar_url} alt="Git picture" width={300} />
    
    </div> 
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/E-srinibash')
    return response.json()
}