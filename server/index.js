const express = require("express");
//  const { selectAll,save,del,up } = require("../database/database-mongo");
 const cors=require('cors')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const {selectAll, save,del,up
} = require("../database/database-mysql");

const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/items", async (req, res)=> {
  try{
    const getting=await selectAll()
    res.json(getting)
  }
  catch(err){
    console.log(err)

  }
    
  


});
app.post("/api/items",async(req,res)=>{
  try{
    const produit={
     
      description:req.body.description,
      quantity:req.body.quantity
      
    }
    
    const saved=await save(produit)
    res.json(saved)
  }
  catch (err){
    console.log(err)
  }})
  
app.delete("/api/items",async(req,res)=>{
  try{
     const ded=req.body.description
    
    const deleted=await del(ded)
    res.json(deleted)
  }
  catch(err){
    console.log(err)
  }
})

app.put("/api/items/:id",async(req,res)=>{
  console.log(req.params)
  console.log(req.body)
  try{
    const db=req.body.description
    const upp=req.params.id
    const updatee=await up(db,upp)
    res.json(updatee)
  }
  catch(err){
    console.log(err)
  }
})
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
