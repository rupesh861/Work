import React, { useEffect, useState } from 'react';

function Circle() {
    const [color,setColor] = useState(["red","color","red",""]);
    const [index,setIndex] = useState(0);
    


    useEffect(()=>{

        const changeColor=()=>{
            setIndex((prev)=>(prev+1)%color.length)
            if(index===3){
                setIndex(1);
            }
        }
        const i = setInterval(()=>{
            changeColor();
        },4000)

        return ()=> clearInterval(i);
    },[index])

  return (
    <>
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" fill={index===1?"red":""} />
    </svg>
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" fill={index===2?"yellow":""} />
    </svg>
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" fill={index===3?"green":""} />
    </svg>
    </>
  );
}

export default Circle;