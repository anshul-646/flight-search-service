const { AirportService } = require('../service/index');
const {ServerErrorCodes, SuccessCodes} = require('../utils/error-codes');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const response = await airportService.create(req.body);
        return  res.status(SuccessCodes.CREATED).json({
            data : response,
            message : "Successfully created a airport.",
            success : true,
            error : {}
        });
    } catch (error) {
        console.log(error);
        return  res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            message : "Not able to create a airport",
            success : false,
            error : error
        });
    }
}

module.exports = {
    create
}