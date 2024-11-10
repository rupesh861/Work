import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [name , setName] = useState('');

    const handleChange=(name)=> {
        setName(name);
    }
  return (
    <div>
        <span>
      The Parent name is {name};</span>

      <Child  onNameChange={handleChange}/>
    </div>
  )
}

export default Parent
