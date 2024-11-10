import React from 'react'

const Sum = () => {
   //! Currying
    // function first(a){
    //     return function second(b){
    //         return a+b;
    //     }
    // }

    // console.log(first(1)(2));


    // Infinite Currying
    function first(a){
        return function second(b){
            if(b) return first(a+b)
            return a;
        }
    }

    console.log(first(5)(4)(3)(2)(1)())

  return (
    <div>
      Hello
    </div>
  )
}

export default Sum
