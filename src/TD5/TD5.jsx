import { useState } from "react";

const TD4 = () => {
  const [counter, setCounter] = useState(0);
  const [playerName, setPlayerName] = useState("")
  const changePlayerName = (e)=>{
    if(e.target.value.match(/^[^0-9]*$/))
        setPlayerName(e.target.value)
  }

  return (
    <div>
        {counter}
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <button onClick={()=>{setCounter(counter-1)}}>-</button>
        <button onClick={()=>{setCounter(0)}}>Reset</button>
        {counter === 10 && <p>BOOM</p>}
        {playerName}
        <input placeholder="Player name" value={playerName} onChange={changePlayerName}/>
    </div>)
};

export default TD4;
