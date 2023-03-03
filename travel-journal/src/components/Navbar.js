import globe from "../images/globe.png"
export default function Navbar(){
    return(
        <nav className="nav">
            <img src={globe} className="logo" alt="globe-logo"/>
            <h1>My Travel Journal</h1>
        </nav>
    )
}