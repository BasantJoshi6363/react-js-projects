import React, { useState } from 'react'

const BgChanger = () => {
    const [color,setColor] = useState("")

    const buttons = ["yellow", "green", "red", "blue", "purple", "pink", "white", "olive"];
    return (
        <div className='main-inner'>
            {buttons.map((value, i) => {
                return <button onClick={()=>{
                    setColor(value)
                    document.body.style.backgroundColor = value;
                }} key="i" style={{ backgroundColor: `${value}`, cursor: "pointer",color:"black" }}>{value}</button>
            })}
        </div>
    )
}

export default BgChanger