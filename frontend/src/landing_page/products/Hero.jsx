import React from 'react'

export default function Hero() {
  return (
    <div className='container'>
      <div style={{textAlign:"center", padding:"5rem 0"}}>
        <h1 className='mb-3' style={{fontSize:"3em"}}>Technology</h1>
        <h5 style={{fontSize:"1.5em"}}>Sleek, modern, and intuitive trading platforms</h5>
        <p  className="landing-page-links mt-3" style={{fontSize:"1.1em"}}>Check out our <a href="">investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
      </div>
    </div>
  )
}
