import React from "react"
import "./TopNavyBars.css"
export default function Top3NavyBarCard(props){
    return(
        <div className="git">
        <button>{props.title}</button>
        </div>
    )
}