export const jupiterImages = async ()=>{
    return await fetch("https://images-api.nasa.gov/search?q=saturne&page_size=3")
}

export const jupiterImageDetail = async (id)=>{
    return await fetch("https://images-api.nasa.gov/asset/" + id)
}