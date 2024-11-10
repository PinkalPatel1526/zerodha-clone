import React from 'react'

export default function PartnerProgram({imgPath, desc}) {
  return (
    <div>
        <img src={imgPath} alt="Partner Program" style={{display:"inline", width:"50%", marginBottom:"1.5rem"}} />
        <p>{desc}</p>
    </div>
  )
}
