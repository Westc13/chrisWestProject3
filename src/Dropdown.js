import { useState } from 'react';

function Dropdown(props) {
    const { characterArray, setSelectedIndex } = props;
    const [userChoice, setUserChoice] = useState('placeholder');
    const handleUserChoice = (e)=>{
        setUserChoice(e.target.value);
    
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedIndex(+userChoice);
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="characterChoice" className="sr-only">Select a character</label>
            <select
                value={userChoice}
                onChange={handleUserChoice}
                id="characterChoice"
                name="characterChoice"
            >
                <option value="placeholder" disabled>Pick one:</option>

                {characterArray.map((characterObj, index) => {
                return (
                    <option value={index} key={characterObj._id}>{characterObj.name}</option>)
            })}
            </select>
            <button type="submit">Give me a Disney Character</button>
        </form>
    )
}
export default Dropdown;