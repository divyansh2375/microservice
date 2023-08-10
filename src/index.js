const express = require("express");
const {PORT} = require('../src/config/serverConfig') 
const setupAndStartServer = async () =>{

    //create the express object
    const app = express();
    app.listen(PORT , () =>{
        console.log(`server running at ${PORT}`);
    })
    
}
setupAndStartServer();