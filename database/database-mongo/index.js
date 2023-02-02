const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const mongoUri = "mongodb://127.0.0.1/ecommerce";

mongoose.connect(mongoUri)
.then(()=>{
  console.log("db connected");
})
 .catch((err)=>{
  console.log(err);
 })


const itemSchema = new mongoose.Schema({
  description: String,
  quantity: Number,
  image:String
});

const Item = mongoose.model("Item", itemSchema);

const selectAll = () => {
 return Item.find()
}
const save =(user)=>{
 return  Item.create(user)
}
 const del=(x)=>{
  return Item.deleteOne(x)
 }
const up=(x,y)=>{
  return Item.findOneAndUpdate(x,y)
}
module.exports = {
  selectAll,save,del,up
};