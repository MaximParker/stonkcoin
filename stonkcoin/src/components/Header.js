import { useState } from "react";

export const Header = () => {


  const [newSlogan, setNewSlogan] = useState('The coiniest coin ever minted!');
  const [updateSlogan, setUpdateSlogan] = useState('The coiniest coin ever minted!');

  const handleSubmit = (event) => {
    console.log(newSlogan)
    // prevent the forms default behaviour
    event.preventDefault();
    // add the newItem to our list in App
    setNewSlogan(newSlogan)
    // reset the input to be empty
    setUpdateSlogan(newSlogan)
    setNewSlogan('')
  };

  return (
      <header className="App-header">
        <h1>📈 StonkCoin</h1>
        <p>{updateSlogan}</p>
        <form onSubmit={handleSubmit}>
          <label>
           <input type='text' placeholder="placeholder"
          // 1. set the value of the input
          //value={newSlogan}
          // 2. Update the state whenever a change is made to that value
          onChange={(event) => setNewSlogan(event.target.value)}
        />
      </label>
      <button type="submit">Change Slogan!</button>
    </form>

      </header>
  );
};
