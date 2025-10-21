import { useContext, useEffect, useState } from "react"
import { jupiterImages } from "../services/nasa"
import Image from "./Image"
import { Link } from "react-router-dom"
import { globalContext } from "../TD12/store"

const Gallery = () => {
    const [images, setImages] = useState([])
    const [error, setError] = useState(null)
    const getJupiter = async ()=>{
        const jupiterResult = await jupiterImages();
        if(jupiterResult.ok){
            const result = await jupiterResult.json();
            setImages(result.collection.items)
        }
        else{
            setError("Erreur lors de l'appel Api...")
        }
    }
    useEffect(()=>{
        getJupiter()
    }, [])

    const {store} = useContext(globalContext)

    return (
        <div>
            <h1 class={store.theme}>
                {store.lang === "fr" ? "Bienvenue" : "Welcome"}
            </h1>
            {error ? <p>{error}</p>
            :
                images.length > 0 ?
                    <div>
                        {images.map((image)=>(
                            <Link to={`/gallery/${image.data[0].nasa_id}`} key={image.data[0].nasa_id}>
                                <Image link={image.links[0].href} title={image.data[0].title}/>
                            </Link>
                        ))}
                    </div>
                :
                    <p>Loading...</p>
            }
        </div>
    )
}
export default Gallery