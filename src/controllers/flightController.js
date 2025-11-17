const { FlightService } = require('../service');

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return  res.status(201).json({
            data : flight,
            message : "Successfully created a flight",
            success : true,
            error : {}
        });
    } catch (error) {
        console.log(error);
        return  res.status(500).json({
            data : {},
            message : "Not able to create a flight",
            success : false,
            error : error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const flights =  await flightService.getAllFlightData(req.query);
        return  res.status(200).json({
            data : flights,
            message : "Successfully fetched all flights data",
            success : true,
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(204).json({
            data : {},
            message : "Unable to fetch flight data",
            success : false,
            error : error
        });
    }
}

module.exports = {
    create,
    getAll
};