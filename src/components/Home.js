import React from 'react'
import BrandNav from './BrandNav'
import Navbar from './Navbar'
import Slider from './Slider'
import Figure from './Figure'
import shoes from '../assets/shoes.png'
import ImageBar from './ImageBar'
import Featured from './Featured'
import ItemList from './ItemList'
import BottomNav from './BottomNav'

const Home = () => {
    const image1 = shoes;
    const imageUrl='shoes.png';
    const caption1 = {
        text1 : "Coming Soon",
        text2 : "NIKE AIR MAX DN",
        text3 : "The next generation of Air technology launches on March 26th. Preview the full lineup of colourways now.",
        text4 : "Get Notified"
    }
    const caption2 = {
        text1 : "Just In",
        text2 : "NIKE AIR MAX DN",
        text3 : "The next generation of Air technology launches on March 26th. Preview the full lineup of colourways now.",
        text4 : "Shop"
    }
    const heading1 = "Icons of Air";
    const imgcaption = "Air Max 90";
  
    return (
    <div>
      <BrandNav/>
      <Navbar/>
      <Slider/>
      <Figure image={image1} caption = {caption1}/>
      <ImageBar image = {image1} heading={heading1} imgcaption={imgcaption}/>
      <div style={{margin:"2% 0% 2% 5%",fontSize:"25px"}}> Trending</div>
      <Figure image ={image1} caption = {caption2}/>
      <div style={{margin:"2% 0% 2% 5%",fontSize:"25px"}}> Featured</div>
      <Featured imageUrl={image1}/>
      <div style={{margin:"2% 0% 2% 5%",fontSize:"25px"}}> Gear Up</div>
      <Figure image={image1} caption = {caption1}/>
      <div style={{margin:"2% 0% 2% 5%",fontSize:"25px"}}> The Latest</div>
      <Figure image={image1} caption = {caption1}/>
      <div style={{margin:"2% 0% 2% 5%",fontSize:"25px"}}> Don't Miss</div>
      <Figure image={image1} caption = {caption1}/>
      <div style={{margin:"2% 0% 2% 5%",fontSize:"25px"}}> Member Benefits</div>
      <Featured imageUrl={image1}/>
      <ItemList/>
      <BottomNav/>
      
    </div>
  )
}

export default Home
