import React, { useState } from 'react'
import Newsbody from './Newsbody'
function Swasti() {
  const [img ,setImg] =useState()
  const Change=(event)=>{
     const data= event.target.value;
     setImg(data)
     console.log(data)
  }
  return (
    <>
    <input type="text" value={img} placeholder='search' onChange={Change} />
    <Newsbody names={img}/>
    </>
    )
}

export default Swasti

