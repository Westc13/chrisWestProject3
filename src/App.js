import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import DisplayPhoto from './DisplayPhoto';
import DisplayTexts from './DisplayTexts';
import Footer from './Footer';

function App() {
  const [characterArray, setCharacterArray] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios({
      url: "https://api.disneyapi.dev/characters",
      method: "GET",
      dataResponse: "JSON",
    }).then((response) => {
      console.log(response.data.data);
      setCharacterArray(response.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="App">
      {isLoading === true ? (
        <p>Please wait! The site is loading.</p>
      ) : (
        <>
          <h1>Show Me A Disney Character!</h1>
          <Dropdown
            characterArray={characterArray}
            setSelectedIndex={setSelectedIndex}
          />
          {selectedIndex !== null ? (
            <>
              <DisplayPhoto character={characterArray[selectedIndex]} />
              <DisplayTexts character={characterArray[selectedIndex]} />
            </>
          ) : null}
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
