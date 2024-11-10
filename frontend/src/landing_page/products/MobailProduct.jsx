import React from 'react'
import googlePlayImg from '../../assets/googlePlayBadge.svg'
import appStoreImg from '../../assets/appstoreBadge.svg'

export default function MobailProduct({imgPath, header, desc,linkName, link, googlePlay, appStore}) {
  return (
    <div className='container' style={{paddingTop:"10%"}}>
        <div className="row">
          <div className="col-lg-7 col-sm-12">
            <img src={imgPath} alt="Zerodh Prodoct" style={{alignContent:"center", padding:"0 5%"}}/>
            
          </div>
          <div className="col-lg-5 col-sm-12 mt-5">
            <h2 style={{marginBottom:"2rem"}}>{header}</h2>
            <p style={{fontSize:"1.14em", lineHeight:"1.8rem"}}>{desc}</p>

            <div className="landing-page-links" style={{marginBottom:"2rem"}}>
              <a href={link} >
               {linkName}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
              </a>
            </div>

            <div className="downlode-link">
              <a href="">
                <img src={googlePlayImg} alt="GooglePlay link"  style={{width:"30%", margin:"0 2%"}}/>
              </a>
              <a href="">
                <img src={appStoreImg} alt="App Store link" style={{width:"30%" ,margin:"0 2%"}}/>
              </a>
            </div>
          </div>
        </div>

    </div>
  )
}
