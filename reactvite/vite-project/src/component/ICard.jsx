import React from 'react'

function ICard(props) {
    
  return (
    <div style={{border:"5px solid yellow",height:"250px",width:"175px"}}>
      <h2 style={{backgroundColor:'green',color:'darkblue'}}>ABES ENGINEERING COLLEGE</h2>
      {/* <h2 style={{color:'white'}}>Name:Aayush </h2>
      <h2 style={{color:'orange'}}>Roll No:24007</h2>
      <h2 style={{color:'skyblue'}}>Branch:aiml</h2>
      <h2 style={{color:'pink'}}>Section:c</h2> */}
    <h3>Roll:{props.roll}</h3>
    <h3>Name:{props.name}</h3>
    <h3>Branch:{props.branch}</h3>
    </div>
  )
}

export default ICard