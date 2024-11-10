import React, { useCallback, useState } from "react";

const SearchWithDebounce = () => {
  const [debounceValue, setDebounceValue] = useState("");
  const [thorottledValue, setThorottledValue] = useState("");

  const debounce = (fn, d) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, d);
    };
  };

  const ourThrottle = (fn, delay) => {
    let timer;
    return (...args) => {
      if (!timer) {
        fn(...args);
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      }
    };
  };

  const handleDebounce = (e) => {
    setDebounceValue(e.target.value);
  };

  const handleThrottle = (e)=>{
    setThorottledValue(e.target.value);
   }

  const DebounceFunction = useCallback(debounce(handleDebounce, 300), []);
  const ThrottledFunction = useCallback(ourThrottle(handleThrottle, 600), []);
  return (
    <>
    <div>
      <input type="text" onChange={DebounceFunction}></input>
      <br></br>
      <span>{debounceValue}</span>
    </div>
    <br></br>
    <div>
      <input type="text" onChange={ThrottledFunction}></input>
      <br></br>
      <span>{thorottledValue}</span>
    </div>
    </>
  );
};

export default SearchWithDebounce;
