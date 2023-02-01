import React from "react"
import "./TopDarkNavyBars.css"
import Top3NavyBarCard from "./Top3NavyBarProps/Top3NavyBarCard"
import TopNavyBarDataWords from "./Top3NavyBarProps/TopNavyBarDataWords"
export default function TopDarkNavyBars(){
    const topNavyCard = TopNavyBarDataWords.map(item =>{
        return (
            <Top3NavyBarCard 
            key={item.id}
            title={item.title}
            />
        )
    })
    return (
        <div className="overallTopNavyBar">
            <div className="topNavy">
            {topNavyCard}
            </div>
            <div className="bottomNavy">
            </div>
        </div>

    )
}