import Logo from "../logo/Logo"
import NavMenu from "../navMenu/NavMenu"
import './header.css'

export default function Header (){
    return (
        <div className="header">
            <Logo/>
            <NavMenu />
        </div>
    )
}