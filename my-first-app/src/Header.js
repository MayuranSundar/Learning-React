import logo from './react-icon.png';
export default function Header(){
    return (
        <header>
            <nav className="nav">
                <img className ="img" src={logo} alt="logo"/>
                <ul className = "nav-items">
                    <li>Nav 1</li>
                    <li>Nav 2</li>
                    <li>Nav 3</li>
                </ul>
            </nav>
        </header>
    )
}