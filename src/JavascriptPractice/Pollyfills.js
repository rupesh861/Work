import React from 'react'

Array.prototype.myMap= function (cb){
    let temp = [];
    for (let index = 0; index < this.length; index++) {
        temp.push(cb(this[index],index,this))
    }
    return temp

}

const Pollyfills = () => {

   const res=  [1,2,3,4].myMap((num)=>{
       return num*3;
    });

    console.log(res);

  return (
    <div>
      Hello
    </div>
  )
}

export default Pollyfills
