const { AirportRepository } = require("../repository/index");
const CrudService = require("./crudService");

class AirportService extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportService;