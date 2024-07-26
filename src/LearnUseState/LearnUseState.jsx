import React, { useState } from 'react'
import "../style.css"

const LearnUseState = () => {
    const [text, setText] = useState("")
    const changeToUpperCase = () => {
        setText(text.toUpperCase())
    }
    const changeToLowerCase = () => {
        setText(text.toLowerCase())
    }
    const [copyStatus, setCopyStatus] = useState(false)
    if (copyStatus == true) {
        const btn = document.querySelector("#btn")
        btn.innerHTML = "copied!!"
        btn.style.backgroundColor = "grey"
    }


    const handleCopy = () => {
        const field = document.querySelector("#textField")
        field.select();
        document.execCommand("copy");
        setCopyStatus(true)
    }
    return (
        <div>
            <textarea name="" id="textField" value={text} onChange={(e) => {
                setText(e.target.value)
            }} rows={10}>

            </textarea>
            <button onClick={changeToUpperCase}>Change to UpperCase</button>
            <button onClick={changeToLowerCase}>Change to LowerCase</button>
            <button id="btn" onClick={handleCopy}>Copy Text</button>

            <p>No. of word {text.split(" ").length - 1} and letters {text.split(" ").join("").length}</p>
            <h4>preview </h4>
            <p>{text}</p>
            <p>number of  {text.split(" ").join("").length} letters and words {text.split(" ").length - 1}</p>
        </div>
    )
}

export default LearnUseState