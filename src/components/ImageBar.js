import React from 'react'

const ImageBar = (props) => {
  return (
    <>
        <div style={{marginTop:"5%",marginLeft:"2%"}}><h1>{props.heading}</h1></div>
        <div className="horizontal-scroll" style={{marginTop:"1%",marginLeft:"2%"}}>
            <ul style={{listStyleType:"none"}}>
                <li><img src={props.image} width="450" height="600" style={{marginRight:"1%"}}/></li>
                <li style={{marginTop:"5%",fontSize:"40px"}}>{props.imgcaption}</li>
            </ul>
            <ul style={{listStyleType:"none"}}>
                <li><img src={props.image} width="450" height="600" style={{marginRight:"1%"}}/></li>
                <li style={{marginTop:"5%",fontSize:"40px"}}>{props.imgcaption}</li>
            </ul>
            <ul style={{listStyleType:"none"}}>
                <li><img src={props.image} width="450" height="600" style={{marginRight:"1%"}}/></li>
                <li style={{marginTop:"5%",fontSize:"40px"}}>{props.imgcaption}</li>
            </ul>
            <ul style={{listStyleType:"none"}}>
                <li><img src={props.image} width="450" height="600" style={{marginRight:"1%"}}/></li>
                <li style={{marginTop:"5%",fontSize:"40px"}}>{props.imgcaption}</li>
            </ul>
            <ul style={{listStyleType:"none"}}>
                <li><img src={props.image} width="450" height="600" style={{marginRight:"1%"}}/></li>
                <li style={{marginTop:"5%",fontSize:"40px"}}>{props.imgcaption}</li>
            </ul>
            <ul style={{listStyleType:"none"}}>
                <li><img src={props.image} width="450" height="600" style={{marginRight:"1%"}}/></li>
                <li style={{marginTop:"5%",fontSize:"40px"}}>{props.imgcaption}</li>
            </ul>
            <ul style={{listStyleType:"none"}}>
                <li><img src={props.image} width="450" height="600" style={{marginRight:"1%"}}/></li>
                <li style={{marginTop:"5%",fontSize:"40px"}}>{props.imgcaption}</li>
            </ul>
            
            
                    
            
        </div>
            
    </>
  )
}

export default ImageBar
