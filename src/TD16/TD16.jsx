import Button from "@components/Button/Button"
import useToggle from "../hooks/useToggle"

const TD16 = () => {
    const [isOpen, handleIsOpen] = useToggle()
    return (
        <div>
            <Button label="aze" />
            <button onClick={handleIsOpen}>Yolo {isOpen ? "fermer" : "ouvrir"}</button>
            {isOpen && <p>Yolo ouvert !</p>}
        </div>
    )
}
export default TD16