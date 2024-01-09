const express= require("express");
const mongoose=require("mongoose");
const authRouter = require("./routes/auth");
const app=express();


const PORT=3000;
const DB= "mongodb+srv://anik:Anik511351@cluster0.rxhmgd6.mongodb.net/?retryWrites=true&w=majority";



app.use(express.json());
app.use(authRouter);

mongoose.connect(DB).then(()=>{
    console.log("Connection Successful to Database");
}).catch((e)=>{
    console.log(e);
});

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Connected to port ${PORT}`);
});