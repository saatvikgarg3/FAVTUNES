const express=require("express");
const routes=require('./routes');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/favtunes",routes);
app.listen(5500, () => {
    console.log("Server is listening at port 5500");
});