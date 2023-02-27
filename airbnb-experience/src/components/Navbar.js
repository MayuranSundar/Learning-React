import logo from "../images/logo.png"
export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} className="logo" alt="airbnb logo"/>
        </nav>
    )
}