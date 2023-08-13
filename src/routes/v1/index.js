const express = require("express")
const CityController = require("../../controllers/city-controller")
const router = express.Router()
router.post("/city" , CityController.create);
module.exports = router;

//whenever anyone type /v1/city then it will call to citycontroller then this call the cityService and this call the city repository then this call your city model