import React from 'react'

export default function Usp({heading, desc}) {
  return (
    <>
        <h4 style={{fontSize:"1.5rem"}}>{heading}</h4>
        <p className='text-muted' style={{margin:"0.5rem 0 3rem 0", fontSize:"1.15em"}}>{desc}</p>
    </>
  )
}
