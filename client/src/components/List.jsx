import React, { useState } from 'react';
import ListItem from "./ListItem.jsx";
import axios from 'axios';

const List = (props) => {
  console.log(props)
  const[description,setDescription]=useState("")
  const[quantity,setQuantity]=useState("")
  const[image,setImage]=useState(null)
  const[url,setUrl]=useState("")
  const[show,setShow]=useState(true)
   const onchange1=(e)=>{
    setDescription(e.target.value)
   }
   const onchange2=(e)=>{
    setQuantity(e.target.value)
   }
   const onchng=(e)=>{
    setImage(e.target.files[0])
   }
  const add=async()=>{
    const form =new FormData ()
    form.append("file",image)
    form.append("upload_preset","postimage")
    await axios.post("https://api.cloudinary.com/v1_1/dz3pytmvd/upload",form)
    .then((result)=>setUrl(result.data.secure_url))
    
    props.Add(description,quantity)
    setShow(false)
  }

 
  //dz3pytmvd
  //https://api.cloudinary.com/v1_1/
return(
  <div>

 
    <input id='in'onChange={onchange1}/>
  <input id='in2' onChange={onchange2}/>
  <input onChange={onchng} type="file"/>
  {/* <button onClick={upload}>upload</button> */}

  <button onClick={add}>add post</button>
  <br />
  <br />
 {!show&&<img className="img" src={url}/>}
  
    <p id="p">There are {props.items.length} posts.</p>
    {props.items.map((item, index) => (
      <div key={index}>
        <ListItem item={item} Fun={props.Deleteitem} image={image}Fun2={props.Update}/>
       
      </div>
        
    ))}
  </div>
  
  
)}
  


export default List;
