const crudRepository = require("./crudRepository");
const {Airport} = require('../models/index');

class AirportRepository extends crudRepository{
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;