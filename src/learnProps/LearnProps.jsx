import React from 'react'

const LearnProps = (props) => {
  return (
    <div>
        <h1>my name is {props.info.name} </h1>
        <p>my age is {props.info.age} </p>
        <p>my occupatioin is {props.info.occupation} </p>
        <p>my friends are {props.info.friends.map((value,i)=>{
            return <span key={i}>{value}, </span>
        })}</p>
    </div>
  )
}

export default LearnProps