export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"

    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    } 

    return(
        <div className = "card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`./images/${props.item.coverImg}`} alt="profile"/>
            <div className="card--stats">
                <img className="card--star" src={props.star} alt="star"/>
                <p className="gray">{props.item.stats.rating}</p>
                <p className="gray">{`(${props.item.stats.reviewCount}) · ${props.item.location}`}</p>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From £{props.item.price}</span>/ person</p>
        </div>
    )
}