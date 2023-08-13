const {CityRepository} = require("../repository/index")

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();

    }

    async createCity(){
        try{
            const city = await this.CityRepository.createCity(data);
            return city;
        }catch (error){
            console.log("something went wrong")
            throw {error};
        }
        

    }
    async deleteCity(){
        try{
            const response = this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch (error){
            console.log("something went wrong at service layer")
            throw(error)
        }
    }
    async updateCity(cityId , data){
    try{
        const city = await this.cityRepository.updateCity(cityId ,data);
        return city;
    }catch (error){
        console.log("something went wrong at service layer")
        throw {error};
    }
    }
    async getCity(){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        }catch (error){
            console.log("something went wrong at service layer")
            throw {error};
        }

    }

}
module.exports = CityService;