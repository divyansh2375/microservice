const express = require("express");
const {PORT} = require('../src/config/serverConfig'); 
const bodyParser = require("body-parser");

const setupAndStartServer = async () =>{

    //create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}))


    app.listen(PORT , () =>{
        console.log(`server running at ${PORT}`);
    })
    
}
setupAndStartServer();