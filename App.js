import React from "react"
import data from "./data"
import Header from "./Header"
import Travel from "./Travel"

export default function App() {
    const Travels = data.map((location,index) => {
        return (
            <Travel key={index} {...location}/>
        )
    })
    
    return (
            <div>
                <Header />
                <main>
                    {Travels}
                </main>
            </div>
    )
}

// key = {location.id}
// title = {location.title}