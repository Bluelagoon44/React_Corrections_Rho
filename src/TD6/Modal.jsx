const Modal = ({title, close, children}) => {
  return (
    <div>
        <h2>{title}</h2>
        <button onClick={close}>X</button>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Modal