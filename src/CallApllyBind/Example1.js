import React, { useEffect, useState } from "react";

const Example1 = () => {
  ///// call///////
  // const cars = {
  //     make : "Tesla",
  //     model : "model S"
  // }

  // const motorcycle = {
  //     make : "Ducati",
  //     model : "Panigale V4",
  //     setEngine(){
  //         console.log(`this is ${this.make}  ${this.model}`);
  //     }
  // }

  // motorcycle.setEngine.call(cars)

  // ///! Bind

  // function calculateArea(w,h){
  //     return w*h
  // }

  // const calculate = calculateArea.bind(null,10);
  // console.log( calculate(5));

  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("value is", value);
      setValue(value=>value + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <h1>{value}</h1>;
};


export default Example1;
