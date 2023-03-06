import './Header.css'
import Picture from '../../assets/React.svg'

export default function Header () {
    return (
        <img src={Picture} alt="user-picture" className="user-picture" />
    )
}