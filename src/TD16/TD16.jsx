import useToggle from "../hooks/useToggle"

const TD16 = () => {
    const [isOpen, handleIsOpen] = useToggle()
    return (
        <div>
            <button onClick={handleIsOpen}>Yolo {isOpen ? "fermer" : "ouvrir"}</button>
            {isOpen && <p>Yolo ouvert !</p>}
        </div>
    )
}
export default TD16