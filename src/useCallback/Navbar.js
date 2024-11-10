import React, { memo } from 'react'

const Navbar = ({adjective,render}) => {
    console.log("i am redering navbar")
  return (
    <div>
      I am {adjective} person
      <button onClick={()=>render()} >Catch me</button>
    </div>
  )
}

export default memo(Navbar)
