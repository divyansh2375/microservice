const {} = require("../models/index");
class CityRepository{
    //ye sare to behaviour he hum ye alag repostiry me sepearte isliye bana rhe hein kyonki agar tum khud socho jab models me saare bhar denge to bhot messy lagega isliye use kisi ek reo me rkhe udhar export kr denge


    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;

        }catch (error){
            console.log("something went wrong")
    }
}
async updatCity(){
try{
    const city = await City.update(data,{
        where: {
            id:cityId
        }
        
    });
    return city;
}catch(error){
    console.log("something went wrong");
    throw {error};
}

}
async getCity(){
    try{
        const city = await City.findByPk(cityId);
        return City;
    }catch (error){
        console.log("someting went wrong ")
        throw {error};
    }

}

async deleteCity(cityId) {
    try{
        await City.destroy({
            where: {
                id: cityId
            }
        });
        return true;
    }catch (error){
        console.log("something went wrong")
        throw {error};
    }
}
  }

  module.exports = CityRepository;