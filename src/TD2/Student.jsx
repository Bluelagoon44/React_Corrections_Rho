import Button from "../components/Button/Button"

const Student = ({firstName, lastName, avatar, campus, devLanguage, isFromRi7}) => {
    const popup = ()=>{
        alert(`Je m'appelle ${firstName} ${lastName}`)
    }

    return (
        <>
            <div>
                <img src={avatar} alt="ri7" />
                <h2>{firstName + " " + lastName}</h2>   
                <p>{campus}</p>
                <p>{devLanguage}</p>
                <p>{isFromRi7 ? "Wow, la meilleure école, bravo !" : "Dommage"}</p>
                <Button action={popup} />
            </div>
        </>
    )
}

export default Student