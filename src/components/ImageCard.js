import React from 'react'
import './brandnav.css';

const ImageCard = (props) => {
  return (
        
            <div style={{ backgroundImage: `url(${props.imageUrl})`,height:"500px",color:'white',marginLeft:"5%",marginTop:"2%"}}>
                <div style={{color:"white",marginLeft:"10%",marginBottom:"20%", width:"400px", display:"flex",alignItems:"flex-end",justifyContent:"start"}}>
                    <div>Retro Running Shoes</div>
                </div>
                <div style={{display:'flex'}}>
                <button style={{color:"black",borderRadius:"10px 10px 10px 10px", border:"none",height:"10%",width:"400px"}}>shop</button>
                </div>
                
            </div>

        
  )
}

export default ImageCard
