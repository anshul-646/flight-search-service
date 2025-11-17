const { City } = require('../models/index');
const {Op} = require('sequelize');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.error("Error creating city:");
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            console.error("Error deleting city:");
            throw error;
        }
    }

    async updateCity(cityId,data){
        try {
            // will not return updated dat,we can using returning :true if we are using PostGre sql.
            // const city = await City.update(data,{
            //     where :{
            //         id :cityId
            //     }
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            city.save();
            return city;
        } catch (error) {
            console.log("Somethinf went wrong in repo layer");
            throw error;
        }
    }

    async getCity(cityId){
        try {
            console.log("cityId",cityId);
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Can not find city");
            throw error;
        }
    }

   async getAllCities(filter) {
        try {
            const where = {};

            if (filter && filter.name) {
                where.name = { [Op.like]: `${filter.name}%` }; 
                // for postgres use Op.iLike
            }

            const cities = await City.findAll({ where });
            return cities;

        } catch (error) {
            console.log("Cannot get cities", error);
            throw error;
        }
    }

}

module.exports = CityRepository;
