import React, { useMemo, useState } from 'react'
const num = new Array(30_000_000).fill(0).map((_,i)=>{
 return {
    index:i,
    magicNumber: i=== 28_000_000
 }
})
const Memo = () => {
    const [count,setCount] = useState(0);
    const [numbers,setNumbers] = useState(num);
    const magic = useMemo(()=>numbers.find(item=>item.magicNumber===true),[numbers])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count</button><span>{count}</span>
        <br></br>
        <span>{magic.index}</span>
    </div>
  )
}

export default Memo
