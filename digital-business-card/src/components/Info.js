import profile from "../images/Mayu.JPG"
export default function Info(){
    return(
        <div className = "info">
            <img src ={profile}/>
            <h1>Mayuran Sundar</h1>
            <h2>Software Developer</h2>
            <button><a href = "mailto: mayuransundar@hotmail.com" className="button">Email</a></button>
        </div>
    )
}