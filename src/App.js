import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [char, setChar] = useState([]);

  // const [isLoading, setIsLoding] = useState(true);

  useEffect(() => {
    axios({
      url: "https://api.disneyapi.dev/characters",
      method: 'GET',
      dataResponse: 'JSON',
    }).then((response) => {
      setChar(response.data.data);
      // setIsLoading(false);
    })
  }, [])
  return (
    <div className="App">
      <h1>Show Me Disney Characters</h1>
      <select>
        {char.map(charObj => {
        return (
            <option>{charObj.name}</option>)
        })}
      </select>
      
    </div >
  );
}

export default App;
