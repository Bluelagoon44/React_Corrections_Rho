import { useEffect, useRef, useState } from "react"

const TD15 = () => {
    const [likes, setLikes] = useState(0)
    const isLiking = useRef(false)

    const pressLike = ()=>{
        setLikes(likes+1)
        isLiking.current = true
    }

    const unpressLike = ()=>{
        isLiking.current = false
    }

    useEffect(()=>{
        setTimeout(()=>{
            if(isLiking.current){
                setLikes(likes+1)
            }
        }, 200)
    }, [likes])
    
    return (
        <>
            <div>{likes}</div>
            <button onMouseDown={pressLike} onMouseUp={unpressLike}>Liker</button>
        </>
    )
}
export default TD15