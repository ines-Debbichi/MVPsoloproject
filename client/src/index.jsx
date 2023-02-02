import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'



const App = () => {
  const [items, setItems] = useState([])
  const[update,setUpdate]= useState(false)
  useEffect(() => {
    $.ajax({
      url: 'http://127.0.0.1:3000/api/items',
      success: (data) => {
        console.log(data)
        setItems(data[0])
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [update])


  


const Add=(description,quantity,image)=>{
  $.post("http://127.0.0.1:3000/api/items",{description:description,
     quantity:quantity,image:image})
  .then(res=>{console.log(res)
    setUpdate(!update)}
     )
  .catch(err=>{
   console.log(err)
  })
  
}




const Deleteitem=((description,quantity,image)=>{
  
$.ajax({
  url:"http://127.0.0.1:3000/api/items",
  type:"DELETE",
  data:{description:description,
    quantity:quantity,image:image},
  success:function(result){
    setUpdate(!update)
    console.log(result)
  },
  error: function(err) {
    console.log(err);
  }
})
  })


     
  const Update=(description,id)=>{
    $.ajax({
      url:`http://127.0.0.1:3000/api/items/${id}`,
      type:'PUT',
      data:{
      description:description
      },
      success:function(result){
        setUpdate(!update)
        console.log(result)
      },
      error: function(err) {
        console.log(err);
      }
    })
  }



  

  return (
    <div>
      
      <h1 id="h">Posts List</h1>
      <List items={items} Add={Add} Deleteitem={Deleteitem} Update={Update}/>
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
