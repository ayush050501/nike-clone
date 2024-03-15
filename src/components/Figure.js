import React from 'react'
import './brandnav.css';

const Figure = (props) => {
    let {image, caption} = props;
  return (
    <>
      <img src={image} style={{width:"90%",marginLeft:"5%", marginBottom:"5%"}}/>
        <div className='caption' style={{fontSize:"20px"}}>
            <b>{caption.text1}</b>
        </div>
        <div className='caption' style={{fontSize:"100px"}}>
            <b>{caption.text2}</b>
        </div>
        <div className='caption'>
            <div>{caption.text3}</div>
        </div>
        <div className='caption'>
            <button style={{borderRadius:"10px 10px 10px 10px",backgroundColor:"black",color:"white",marginTop:"2%"}}><b>{caption.text4}</b></button>
        </div>
    </>
  )
}

export default Figure
