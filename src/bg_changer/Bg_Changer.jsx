import React, { useState } from 'react'
import "./index.css";

const BgChanger = () => {
    const [color,setColor] = useState("")

    const buttons = ["yellow", "green", "red", "blue", "purple", "pink", "white", "olive"];
    return (

        <div className='main-inner'>
            <div className="inner-content">
            {buttons.map((value, i) => {
                return <button onClick={()=>{
                    setColor(value)
                    document.body.style.backgroundColor = value;
                }} key="i" style={{ backgroundColor: `${value}`, cursor: "pointer",color:"black" }}>{value}</button>
            })}
            </div>
            
        </div>
    )
}

export default BgChanger