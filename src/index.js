const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('../src/config/serverConfig'); 
const ApiRoutes = require("./routes/index")



const setupAndStartServer = async () =>{

    //create the express object
    const app = express();
    app.use(bodyParser.json());
    //ab bhi ye postman bhi nahi dikha rha tha uski body me to 
    app.use(bodyParser.urlencoded({extended : true}))
    app.use("/api",ApiRoutes)


    app.listen(PORT ,  () =>{
        console.log(`server running at ${PORT}`);
       
    })
    
}
setupAndStartServer();