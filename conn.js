const mongoose=require ("mongoose");
mongoose.connect("mongodb://localhost:27017/olympics",{
    

}).then(()=>{
    console.log("connected successfully")
}).catch((e)=>{
    console.log("connection not set");
});
