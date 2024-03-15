import React from 'react'
import ImageCard from './ImageCard'

const Featured = (props) => {
  return (
    <>
    <div className="horizontal-scroll" style={{marginTop:"1%",marginLeft:"2%"}}>
        <ImageCard imageUrl={props.imageUrl}/>
        <ImageCard imageUrl={props.imageUrl}/>
        <ImageCard imageUrl={props.imageUrl}/>
        <ImageCard imageUrl={props.imageUrl}/>
        <ImageCard imageUrl={props.imageUrl}/>
        <ImageCard imageUrl={props.imageUrl}/>
        <ImageCard imageUrl={props.imageUrl}/>
        <ImageCard imageUrl={props.imageUrl}/>  
     </div>
      
    </>
  )
}

export default Featured
