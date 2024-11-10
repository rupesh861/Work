import React, { useState } from 'react'

const Child = ({onNameChange}) => {
    const [newNAme, setNewName] = useState();

    const handleChange=(e)=>{
        setNewName(e.target.value);
    }

    const send=()=>{
        onNameChange(newNAme);
    }

  return (
    <div>
      <input type='text' value={newNAme} onChange={handleChange}></input>
      <button onClick={send}>Send</button>
    </div>
  )
}

export default Child
