// App.js
import Axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [fact, getFact] = useState("");

  const getFactData = (title) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${title}/`).then((res) => {
      console.log(res.data);
      getFact(res.data[0].excuse);
    });
  }
  return (
    <div className="App">
      <h1>{fact}</h1>
      <button onClick={() => getFactData("family")}>Family</button>
      <button onClick={() => getFactData("office")}>Office</button>
      <button onClick={() => getFactData("family")}>children</button>
    </div>
  );
}

export default App;
