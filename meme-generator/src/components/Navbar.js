import logo from "../images/logo.png"
export default function Navbar(){
    return(
        <nav>
            <h1>Meme</h1>
            <img src={logo} alt="meme-logo" className="logo"/>
            <h1>Generator</h1>
        </nav>
    )

}