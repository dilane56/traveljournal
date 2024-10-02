import '../styles/Header.css'
import world from '../images/Fill 213.png'
export default function Header(){
    return(
        <div className="header">
            <img src={world} className='header-logo'></img>
            <p>my travel journal.</p>
        </div>
    )
}