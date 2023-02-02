const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mySql123456@",
  database: "ecommerce",
}).promise()

connection.connect().then(()=>{console.log("db is  connected")})
.catch((err)=>{console.log(err)})


const selectAll = async ( ) => {
  try {
    const sql="SELECT * FROM `items`"
    return await connection.query(sql);
    
  } catch (error) {
    console.log(error)
  }
}

const save = async (body) => {
  try {
    const sql="INSERT into  `items` (description,quantity,image) VALUE(?,?,?)"
    return await connection.query(sql,[body.description,body.quantity,body.image]);
    
  } catch (error) {
    console.log(error)
  }
}


const del = async (description) => {
  try {
    const sql="DELETE  FROM `items` WHERE description=?"
    return await connection.query(sql,[description]);
    
  } catch (error) {
    console.log(error)
  }
}


const up = async ( description,id) => {
  try {
    const sql="UPDATE `items` SET description=? WHERE id=?"
    return await connection.query(sql,[description,id]);
    
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  selectAll,save,del,up
};
