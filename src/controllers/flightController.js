const { FlightService } = require('../service');
const { SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            departureTime : req.body.departureTime,
            arrivalTime : req.body.arrivalTime,
            price : req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return  res.status(SuccessCodes.CREATED).json({
            data : flight,
            message : "Successfully created a flight",
            success : true,
            error : {}
        });
    } catch (error) {
        console.log(error);
        return  res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
        return  res.status(SuccessCodes.OK).json({
            data : flights,
            message : "Successfully fetched all flights data",
            success : true,
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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