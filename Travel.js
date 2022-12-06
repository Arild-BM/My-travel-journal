import React from "react"

export default function Travel(props) {
    
    return (
        <section>
            <img src={`${props.imageUrl}`} className="place-image" />
            <div className="text-holder">
                <div className="place">
                    <img src="./images/Place-icon.svg" className="place-icon"/>
                    <h5>{props.location}</h5>
                    <a href="{googleMapsUrl}">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </section>
    )
}