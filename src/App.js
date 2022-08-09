import './App.css';
import { usestate, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [char, setChar] = useState('');

  const fetchChar = async () => {
    const url = new URL('')
  }
  return (
    <div className="App">
      <h1>Disney Characters</h1>
    </div>
  );
}

export default App;
