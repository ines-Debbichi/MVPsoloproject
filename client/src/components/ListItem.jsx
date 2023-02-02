import React, { useState } from 'react';

const ListItem = (props) => {
 
  const[show,setShow]=useState(true)
  const[description,setDescription]=useState("")
  
 const del=()=>{
  props.Fun(props.item.description,props.item.quantity,props.item.image)

 }
 const up=()=>{
  props.Fun2(description,props.item.id)
   setShow(true)
 }
 
 const onchange3=(e)=>{
  setDescription(e.target.value)
 }
 const statu=()=>{
  setShow(false)
 }

  return(
    <div id="photos">
     
    <p id="writing"> { props.item.description } { props.item.quantity }</p>  <img id="img"src={props.item.image}/> <button id ="butt1"onClick={del}>delete produit</button><button id="butt2"onClick={statu}>update produit</button>
   
     {!show&& <input id ="in1"onChange={onchange3}/>}
     
     {!show&& <button id="btn3" onClick={up}>update</button>}
   
  
   
  </div>
  )
  }
 
 

export default ListItem;