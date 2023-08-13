const dotenv = require("dotenv");
dotenv.config();

//iska matlb smjhe ye es6 nahi he kyonki es6 me export defualt se sara hota he ye normal export 
module.exports ={
    PORT: process.env.PORT
}