import { Link } from "react-router-dom"

const Image = ({title, link}) => {
  return (
    <img src={link} alt={title} />
  )
}
export default Image