import React from "react"
import americanflag from "../imagefolder/americanflag.png"
import "./UnivWhiteBar.css"
export default function UniversalWhiteTopBar(){
    return(
        <div className="topWhiteBar">
            <div className="innerContent">
                <img src={americanflag} className="americanflag" alt=""/>
                <h3>An official website of the United States Government</h3>
                <h3><a href="">Here's how you know</a></h3>
            </div>
        </div>
    )
}