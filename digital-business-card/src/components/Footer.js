import Linkedin from "../images/Linkedin.png" 
import Github from "../images/Github.png" 
export default function Footer(){
    return(
        <div className = "footer">
            <a href="https://www.linkedin.com/in/mayuransundar/#" target="_blank"><img className="social" src={Linkedin}/></a>
            <a href="https://github.com/MayuranSundar" target="_blank"><img className="social" src={Github}/></a>
        </div>
    )
}