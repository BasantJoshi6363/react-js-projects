import React from 'react'
import BgChanger from './bg_changer/Bg_Changer'
import "./index.css"
import LearnProps from './learnProps/LearnProps'

const App = () => {
  const info = {
    name : "Basant Joshi",
    age : "20",
    occupation : "student",
    friends : ["kanchan","dilip","sujan","unika","khagendra","jeeban"]
  }
  return (
    <div >
      <div className='main'>
        {/* <BgChanger /> */}
        <LearnProps info={info} />

      </div>
    </div>
  )
}

export default App