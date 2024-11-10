import React, { useState } from "react";

export default function Search() {
  const fruits = [
    "Appple",
    "Grapes",
    "Pineapple",
    "Mango",
    "Peach",
    "Banana",
    "Lichi",
  ];

  const [fruitsData, setFruitsDta] = useState(fruits);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterData = fruitsData.filter((frut) =>
    frut.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      {filterData.map((fr) => {
        return <p>{fr}</p>;
      })}
    </div>
  );
}
