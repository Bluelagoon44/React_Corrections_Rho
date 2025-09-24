import { useEffect, useState } from "react";

const TD7 = () => {
  const [time, setTime] = useState(new Date());
  const [isBoom, setIsBoom] = useState(false)

  useEffect(()=>{
    const updateTime = setInterval(()=>{
        setTime(new Date())
    }, 1000)

    return ()=>{clearInterval(updateTime)}
  }, [])

  useEffect(()=>{
    setTimeout(()=>{
        setIsBoom(true)
    }, 10000)
  }, [])
  
  return (
    <div>
        {time.toLocaleTimeString()}
        {isBoom && <p>Boom</p>}
    </div>
    );
};

export default TD7;
