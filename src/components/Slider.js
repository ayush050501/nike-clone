import React,{useState,useEffect} from 'react'

const Slider = ({delay=2000}) => {
    const [isVisible, setIsVisible] = useState(true); 

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(!isVisible);
      }, delay);
  
      return () => clearTimeout(timer); 
    }, [delay, isVisible]); 
  
    return (
      <div  style={{backgroundColor:"rgb(248, 249, 250)",display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
        {isVisible ? <div>
                <div>Save Up to 40%</div>
                <div>Shop All Our New Markdowns</div>
                <div style={{whiteSpace:"pre-wrap"}}>{" "}</div>
            </div> : <div>
                <div>Move, Shop, Customise & Celebrate With Us.</div>
                <div>No matter what you feel like doing today, It's better as a Member.</div>
                <div>Join Us</div>
            </div>}
      </div>
    );
}

export default Slider
