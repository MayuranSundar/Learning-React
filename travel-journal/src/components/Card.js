export default function Card(props){
    return(
        <div className="card-section">
            <img className="location-img" src={props.place.imageUrl}/>
            <div>
                <div className="location-section">
                    <img className="location-pin" src={props.pin}/> 
                    <p className="location">{props.place.location}</p>
                    <a className="url" href={props.place.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <p className="title">{props.place.title}</p>
                <p><strong>{props.place.startDate} - {props.place.endDate}</strong></p>
                <p>{props.place.description}</p>
            </div>
        </div>
    )
}