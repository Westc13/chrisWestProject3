import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import DisplayPhoto from './DisplayPhoto';
import DisplayTexts from './DisplayTexts';


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
      <h1>Show Me A Disney Character!</h1>
      {/* <Dropdown />
      <DisplayPhotos />
      <DisplayTexts /> */}
      {/* install an event listener to select menu then use the call back function to capture user selected character, then somehow pass this user selected character to Display component maybe puppies code along is a good tool? */}
      <select onChange={() => console.log('woooohoooo')}>
    
        {char.map(charObj => {
        return (
            <option>{charObj.name}</option>)
        })}
      </select>
      
    </div >
  );
}

export default App;
