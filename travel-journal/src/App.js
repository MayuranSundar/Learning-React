import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import pin from "./images/pin.png"

export default function App(){
    const cards = data.map(place =>{
        return <Card place={place} pin={pin} />
    })

    return(
        <div>
            <Navbar />
            {cards}
        </div>
        
    )
}