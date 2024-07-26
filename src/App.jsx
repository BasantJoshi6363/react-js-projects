import React from 'react'
import BgChanger from './bg_changer/Bg_Changer'
import "./index.css"
import LearnProps from './learnProps/LearnProps'
import LearnUseState from './LearnUseState/LearnUseState'
import DarkMode from './LearnUseState/DarkMode'

const App = () => {
  const info = {
    name: "Basant Joshi",
    age: "20",
    occupation: "student",
    friends: ["kanchan", "dilip", "sujan", "unika", "khagendra", "jeeban"]
  }
  return (
    <div >
      <div className='main'>
        {/* <BgChanger /> */}
        {/* <LearnProps info={info} /> */}
        <LearnUseState/>
        {/* <DarkMode /> */}


      </div>
    </div>
  )
}

export default App