import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import star from "./images/star.png"
import dataset from "./data"

export default function App(){
  const cards = dataset.map(item =>{
    return <Card
              key={item.id} 
              item={item}
              star={star}
            />
  })
  return(
    <div>
      <Navbar />
      <div className="main">

        <Hero />
        <section className="cards-list">
          {cards}
        </section>
      </div>
    </div>
  )
}