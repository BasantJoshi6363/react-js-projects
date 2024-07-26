import React, { useState } from 'react'

const DarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false)
  const toogleDarkMode = () => { setDarkMode(!isDarkMode) }

  const styleContainer = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
    padding: '10px',
    alignItems: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    height: "100vh",
    width: "100vw"
  }
  const buttonStyle = {
    backgroundColor: isDarkMode ? '#fff' : '#333',
    color: isDarkMode ? '#333' : '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  }
  return (
    <div style={styleContainer}>
      <button style={buttonStyle} onClick={toogleDarkMode}>{isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}</button>
    </div>
  )
}

export default DarkMode