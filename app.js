const express = require ("express");
require("../db/conn");
const app = express();

const MensRanking=require("../models/mens");


const port=process.env.PORT ||3000;
app.use(express.json);
app.post("/mens" , async (req,res) => {
    try{
const addingMensRecords =  new MensRanking(req.body)
  
       const insertMen= await addingMensRecords.save();
       res.status(201).send(insertMen);
       console.log(req.body);
    }catch(e){
res.status(400).send(e);
    }
})

app.listen(port,()=>{
    console.log(`connectionis set at.${port}`)
});