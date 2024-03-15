import React from 'react'
import Item from './Item'

const ItemList = () => {
  return (
    <>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3%"}}>
        <span style={{marginLeft:"15%",marginRight:"5%"}}>
            <h5>ICON</h5>
            <Item/>
        </span>
        <span style={{marginLeft:"5%",marginRight:"5%"}}>
            <h5>Shoes</h5>
            <Item/>
        </span>
        <span style={{marginLeft:"5%",marginRight:"5%"}}>
            <h5>Clothing</h5>
            <Item/>
        </span>
        <span style={{marginLeft:"5%",marginRight:"15%"}}>
            <h5>Kids'</h5>
            <Item/>
        </span>
      </div>
    </>
  )
}

export default ItemList
