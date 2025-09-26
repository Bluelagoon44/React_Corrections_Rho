import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { jupiterImageDetail } from "../services/nasa"
import Image from "./Image"

const Detail = () => {
  const params = useParams()
  const [images, setImages] = useState([])
  const [error, setError] = useState(null)
  const getJupiter = async ()=>{
      const jupiterResult = await jupiterImageDetail(params.id);
      if(jupiterResult.ok){
          const result = await jupiterResult.json();
          result.collection.items.pop()
          setImages(result.collection.items)
      }
      else{
          setError("Erreur lors de l'appel Api...")
      }
  }
  useEffect(()=>{
      getJupiter()
  }, [])
  
  return (
    <div>
      {
        error ? <p>{error}</p>
        :
          images.length>0 ?
            images.map((image)=>(
              <Image key={image.href} title={"yolo"} link={image.href}/>
            ))
          :
            <p>Pas encore yolo...</p>
      }
    </div>
  )
}
export default Detail