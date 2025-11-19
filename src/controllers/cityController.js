const { CityService } = require('../service');
const { fa } = require('zod/locales');
const { SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');

const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.createCity({name : req.body.name});
        return  res.status(SuccessCodes.CREATED).json({
            data : city,
            message : "City has been successfully created.",
            success : true,
            error : {}
        });
    } catch (error) {
        console.log(error);
        return  res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            message : "Not able to create a city",
            success : false,
            error : error
        });
    }
}

const get = async (req,res) => {
    try {
        const city =  await cityService.getCity(req.params.id);
        return  res.status(SuccessCodes.OK).json({
            data : city,
            message : "Successfully fetched the city data",
            success : true,
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            message : "Unable to fetch city data",
            success : false,
            error : error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const cities =  await cityService.getAllCities(req.query);
        return  res.status(SuccessCodes.OK).json({
            data : cities,
            message : "Successfully fetched all cities data",
            success : true,
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            message : "Unable to fetch cities data",
            success : false,
            error : error
        });
    }
}

const update = async (req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return  res.status(SuccessCodes.OK).json({
            data : city,
            message:"Successfully updated the city data",
            success: true,
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            message : "Unable to update the cit data",
            success : false,
            error : error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        res.status(SuccessCodes.NO_CONTENT).json({
            data : response,
            message : "Successfully deleted the requested city data",
            success :true,
            error : {}
        });
    } catch (error) {
        console.log(error);
        res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            message : "Unable to delete the city, try again later",
            success : fa,
            error : error
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    update,
    destroy
}