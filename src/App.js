import React, { useState, useEffect } from "react";
import Character from "./Character";

function App() {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://ghibliapi.herokuapp.com/people");
    const data = await response.json();
    setCharData(data);
    console.log(charData);
  };

  console.log("Todo: ", charData);

//   {
//     "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
//     "name": "Pazu",
//     "gender": "Male",
//     "age": "13",
//     "eye_color": "Black",
//     "hair_color": "Brown",
//     "films": [
//         "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
//     ],
//     "species": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
//     "url": "https://ghibliapi.herokuapp.com/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01"
// },

  return (
    <div className="container-outer">
      {charData.map((char) => {
        return <Character name={char.name} gender={char.gender}  />;
      })}
    </div>
  );
}
export default App;
