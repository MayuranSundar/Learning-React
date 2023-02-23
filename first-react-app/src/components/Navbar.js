import logo from '../react-icon.png';

export default function Navbar(){
    return(
        <div className="navbar">
            <img className ="logo" src={logo} alt="logo"/>
            <p className="title">React Facts</p>
            <p className="subhead">Project 1</p>
        </div>
    )
}