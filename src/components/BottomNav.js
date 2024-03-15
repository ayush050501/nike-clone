import React from 'react'

const BottomNav = () => {
  return (
    <div style={{backgroundColor:"black",color:'white'}}>
        <div style={{marginTop:"5%",display:"flex",justifyContent:"start",alignItems:"start",fontSize:"12px"}}>
            <span style={{marginLeft:"8%",marginTop:"2%"}}>
                <div style={{marginTop:"5%"}}>FIND A STORE</div>
                <div style={{marginTop:"5%"}}>BECOME A MEMBER</div>
                <div style={{marginTop:"5%"}}>Send Us Feedback</div>
            </span>
            <span style={{marginLeft:"5%",marginTop:"2%"}}>
                <div>Help</div>
                <div style={{opacity:"0.4",marginTop:"5%"}}>Get Help </div>
                <div style={{opacity:"0.4",marginTop:"5%"}}> Order Status</div>
                <div style={{opacity:"0.4",marginTop:"5%"}}>Delivery </div>
                <div style={{opacity:"0.4",marginTop:"5%"}}> Returns</div>
                <div style={{opacity:"0.4",marginTop:"5%"}}>Payment Options </div>
                <div style={{opacity:"0.4",marginTop:"5%"}}>Contact Us On Nike.com Inquiries </div>
                <div style={{opacity:"0.4",marginTop:"5%"}}>Contact Us On All Other Inquiries </div>
            </span>
            <span style={{marginLeft:"5%",marginTop:"2%"}}>
                <div>COMPANY</div>
                <div style={{opacity:"0.4",marginTop:"5%"}}>About Nike</div>
                <div style={{opacity:"0.4",marginTop:"5%"}}> News</div>
                <div style={{opacity:"0.4",marginTop:"5%"}}>Careers </div>
                <div style={{opacity:"0.4",marginTop:"5%"}}> Investors</div>
                <div style={{opacity:"0.4",marginTop:"5%"}}>Sustainability </div>
            </span>
            <span style={{marginTop:"2%",width:"50%"}}>
                <div style={{display:"flex",justifyContent:"end"}}>
                    <i className="fa-brands fa-square-twitter fa-2xl" style={{marginRight:"2%"}}></i>  
                    <i className="fa-brands fa-facebook fa-2xl" style={{marginRight:"2%"}}></i>
                    <i className="fa-brands fa-square-youtube fa-2xl" style={{marginRight:"2%"}}></i>
                    <i className="fa-brands fa-instagram fa-2xl" style={{marginRight:"2%"}}></i>
                </div>
            </span>
        </div>
        <div style={{marginTop:"5%",marginLeft:"5%",fontSize:"12px",paddingBottom:"1%"}}>
            <i className="fa-solid fa-location-dot fa-xl" style={{marginRight:"2%"}}></i>
            <span><b>India</b></span>
            <span style={{marginLeft:"3%",opacity:"0.4"}}>© 2023 Nike, Inc. All Rights Reserved</span>
            <span style={{width:"50%"}}>
                <div style={{display:"flex",justifyContent:"end",marginRight:"5%"}}>   
                    <span style={{opacity:"0.4",marginRight:"2%"}}>Guides</span>
                    <span style={{opacity:"0.4",marginRight:"2%"}}>Terms of Sale</span>
                    <span style={{opacity:"0.4",marginRight:"2%"}}>Terms of Use</span>
                    <span style={{opacity:"0.4",marginRight:"2%"}}>Nike Privacy Policy</span>
                </div>
            </span>
        </div>
      
    </div>
  )
}

export default BottomNav
