import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import PhotoOfDay from "./components/PhotoOfDay"


const apiKey = "INVPPOKGylFoV3ksSIcyuMQBtnzywOcHyEspSKTl"

function App() {
  const [nasData, setNasData] = useState([])
  const [count, setCount] = useState(5)

  // const openDetails = id => {
  //   setCurrentFriendId(id)
  // }

  // const closeDetails = () => {
  //   setCurrentFriendId(null)
  // }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2012-03-14`)
      .then((response) => {
        console.log(response.data);
        setNasData(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
      return () => {
        console.log()
      }
  }, [])

  return (
    <div className="App container">
      <h1>Photo Of The Day</h1>
      {
        nasData && <PhotoOfDay nasData={nasData} />
      }
    </div>
  );
}

export default App;