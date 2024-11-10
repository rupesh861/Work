import React, { useCallback, useState } from 'react'
import Navbar from './Navbar'

const Count = () => {
    const [count,setCount] = useState(0)
    const [adjective,setAdjective] = useState("good")

    const render=useCallback(()=>{
        console.log("good ")
    },[])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count</button><span>{count}</span>
      <Navbar adjective={adjective} render={render}></Navbar>
    </div>
  )
}

export default Count
