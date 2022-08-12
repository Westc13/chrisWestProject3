import { useState } from 'react';

function Dropdown(props) {
    const [userChoice, setUserChoice] = useState('placeholder');
    const handleUserChoice = (e)=>{
        setUserChoice(e.target.value);
    }
    console.log(props);
    return (
        <form>
            <select
                value={userChoice}
                onChange={handleUserChoice}
                id="characterChoice"
                name="characterChoice"
            >
                <option value="placeholder" disabled>Pick one:</option>

                {char.map(charObj => {
                return (
                    <option>{charObj.name}</option>)
            })}
            </select>
            <button type="submit">Give me a Disney Character@</button>
        </form>
    )
}
export default Dropdown;